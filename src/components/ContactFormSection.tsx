import { motion } from "framer-motion";
import { useState } from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const nome = (data.get("nome") as string).trim();
    const email = (data.get("email") as string).trim();
    const telefone = (data.get("telefone") as string)?.trim() || null;
    const motivo = (data.get("motivo") as string).trim();

    if (!nome || !email || !motivo) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      setError("Formulário indisponível no momento. Tente novamente ou entre em contato pelo WhatsApp.");
      setLoading(false);
      return;
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nome,
        email,
        telefone,
        motivo,
        origem: "formulario_site",
      }),
    });

    if (!response.ok) {
      console.error("Erro ao salvar lead:", await response.text());
      setError("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="formulario" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Contato
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
              Prefere enviar uma{" "}
              <em className="text-deep-green">mensagem?</em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Preencha o formulário abaixo e a equipe retornará em horário comercial. Se preferir atendimento imediato, utilize o botão de WhatsApp.
            </p>
            <div className="space-y-3">
              <p className="font-body text-sm text-muted-foreground">
                Rua dos Timbiras, 1940, sala 1515, Lourdes
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Belo Horizonte, MG
              </p>
              <p className="font-body text-sm text-muted-foreground">
                (31) 99131-5958
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-card border border-border p-10 text-center">
                <p className="font-display text-xl text-foreground mb-2">Mensagem enviada</p>
                <p className="font-body text-sm text-muted-foreground">
                  O retorno será feito em horário comercial.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10">
                <div className="space-y-5">
                  <div>
                    <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">
                      Motivo do contato
                    </label>
                    <select
                      name="motivo"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="consulta">Agendar consulta</option>
                      <option value="familiar">Consulta para familiar (psicogeriatria)</option>
                      <option value="empresa">Empresa, palestra ou projeto</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <p className="mt-4 font-body text-sm text-destructive">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground py-4 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
