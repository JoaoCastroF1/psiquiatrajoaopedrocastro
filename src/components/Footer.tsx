const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-sm text-background/60">
          © {new Date().getFullYear()} Dr. João Pedro Castro — Psiquiatra e Psicogeriatra. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
