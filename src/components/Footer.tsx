const Footer = () => {
  return (
    <footer className="bg-graphite py-10">
      <div className="container mx-auto px-4 text-center space-y-3">
        <p className="font-display text-lg text-primary-foreground/80">
          <em className="text-lime">Dr.</em> João Pedro Castro

        </p>
        <p className="font-body text-xs text-primary-foreground/40 uppercase tracking-[0.15em]">
          Psiquiatra · Psicogeriatria · CRM 83920 · RQE 62148 · RQE 66521
        </p>
        <p className="font-body text-xs text-primary-foreground/30 pt-4">
          © {new Date().getFullYear()} Dr. João Pedro Castro Martins Farias — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
