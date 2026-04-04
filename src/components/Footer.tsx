import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-graphite">
      {/* Google Maps embed */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0!2d-43.9378!3d-19.9245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+dos+Timbiras%2C+1940+-+Lourdes%2C+Belo+Horizonte+-+MG!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Consultório Dr. João Pedro Castro - Rua dos Timbiras, 1940, sala 1515, Lourdes, BH/MG"
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <p className="font-display text-lg text-primary-foreground/80 mb-2">
              <em className="text-lime">Dr.</em> João Pedro Castro
            </p>
            <p className="font-body text-xs text-primary-foreground/40 uppercase tracking-[0.15em]">
              Psiquiatra · Psicogeriatra
            </p>
            <p className="font-body text-xs text-primary-foreground/40 uppercase tracking-[0.15em] mt-1">
              CRM 83920 · RQE 62148 · RQE 66521
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-3">
              Localização
            </p>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Rua dos Timbiras, 1940, sala 1515
            </p>
            <p className="font-body text-sm text-primary-foreground/70">
              Lourdes · Belo Horizonte — MG
            </p>
            <p className="font-body text-sm text-primary-foreground/50 mt-2">
              Seg–Sex · 8h às 18h
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/50 mb-3">
              Contato
            </p>
            <p className="font-body text-sm text-primary-foreground/70">
              (31) 99131-5958
            </p>
            <a
              href="https://www.instagram.com/drjoaopedrocastro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors mt-2"
            >
              <Instagram className="w-4 h-4" />
              @drjoaopedrocastro
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <p className="font-body text-xs text-primary-foreground/25 text-center">
            © {new Date().getFullYear()} Dr. João Pedro Castro Martins Farias — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
