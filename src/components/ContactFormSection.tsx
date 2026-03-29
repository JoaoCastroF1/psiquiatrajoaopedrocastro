import { motion } from "framer-motion";
import { useState } from "react";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Tally.so form submission (replace FORM_ID with actual Tally form ID)
    // For now, redirect to WhatsApp with form data as fallback
    const nome = data.get("nome") as string;
    const motivo = data.get("motivo") as string;
    const telefone = data.get("telefone") as string;
    const email = data.get("email") as string;

    const message = encodeURIComponent(
      `Olá, vim do formulário do site.\n\nNome: ${nome}\nMotivo: ${motivo}\nTelefone: ${telefone}\nE-mail: ${email}`
    );

    window.open(`https://wa.me/5531991315958?text=${message}`, "_blank");
    setSubmitted(true);
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
              <div className="bg-card border border-border p-8 md:p-10">
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
                      form="contact-form"
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
                      form="contact-form"
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
                      form="contact-form"
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
                      form="contact-form"
                    >
                      <option value="">Selecione</option>
                      <option value="consulta">Agendar consulta</option>
                      <option value="familiar">Consulta para familiar (psicogeriatria)</option>
                      <option value="empresa">Empresa, palestra ou projeto</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  form="contact-form"
                  className="mt-8 w-full font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground py-4 hover:opacity-90 transition-opacity"
                >
                  Enviar mensagem
                </button>
              </div>
            )}
            {/* Hidden form element to handle submission */}
            <form id="contact-form" onSubmit={handleSubmit} className="hidden" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
