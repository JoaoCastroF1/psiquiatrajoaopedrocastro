import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { MenuScribble } from "@/components/brand/scribbles/MenuScribble";
import { CloseScribble } from "@/components/brand/scribbles/CloseScribble";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre", href: isHome ? "#sobre" : "/#sobre", isAnchor: isHome },
    { label: "Atuação", href: "/atuacao", isAnchor: false },
    { label: "Empresas", href: "/empresas", isAnchor: false },
    { label: "Podcast", href: "/podcast", isAnchor: false },
    { label: "Vestibulandos", href: "/vestibulandos", isAnchor: false },
    { label: "Blog", href: "/blog", isAnchor: false },
    { label: "Contato", href: isHome ? "#contato" : "/#contato", isAnchor: isHome },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <div className="flex flex-col min-w-0">
          <Link to="/" aria-label="Página inicial — Dr. João Pedro Castro">
            <Logo variant="light" size="md" highlightDr />
          </Link>
          <span className="hidden xl:block font-body text-[10px] uppercase tracking-[0.15em] text-foreground/70 -mt-0.5 whitespace-nowrap">
            Psiquiatra · Psicogeriatra · CRM-MG 83920 · RQE 62148 / 66521
          </span>
          <span className="hidden lg:block xl:hidden font-body text-[10px] uppercase tracking-[0.15em] text-foreground/70 -mt-0.5 whitespace-nowrap">
            CRM-MG 83920 · RQE 62148 / 66521
          </span>
          <span className="lg:hidden font-body text-[9px] uppercase tracking-[0.12em] text-foreground/70 -mt-0.5">
            CRM-MG 83920 · RQE 62148 / 66521
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) =>
            l.isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs px-5 py-2.5 whitespace-nowrap"
          >
            Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <CloseScribble className="w-6 h-6" /> : <MenuScribble className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-6">
          {links.map((l) =>
            l.isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-body text-sm text-muted-foreground hover:text-foreground py-3 border-b border-border/50"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block font-body text-sm text-muted-foreground hover:text-foreground py-3 border-b border-border/50"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary block text-sm text-center mt-4 py-3"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
