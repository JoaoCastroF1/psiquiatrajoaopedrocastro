import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold text-primary-foreground">
          Dr. João Pedro Castro
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm text-accent-foreground font-body font-semibold px-5 py-2 rounded-lg text-sm hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm text-primary-foreground/80 hover:text-primary-foreground py-3 border-b border-primary-foreground/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm text-accent-foreground font-body font-semibold px-5 py-3 rounded-lg text-sm mt-3 w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
