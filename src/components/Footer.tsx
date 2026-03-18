const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 text-center space-y-3">
        <p className="font-display text-lg text-background/80">
          João Pedro Castro Martins Farias
        </p>
        <p className="font-body text-xs text-background/40 uppercase tracking-[0.15em]">
          Psiquiatra · Psicogeriatra · CRM 83920 · RQE 62148 · RQE 66521
        </p>
        <p className="font-body text-xs text-background/30 pt-4">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
