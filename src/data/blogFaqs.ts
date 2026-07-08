export interface BlogFaqItem {
  question: string;
  answer: string;
}

// Perguntas frequentes por slug do post. Importado apenas por quem renderiza
// o artigo completo (BlogPost), para nao inflar o bundle das listagens.
// Cada bloco vira uma secao visivel no artigo + schema FAQPage (JSON-LD),
// o que ajuda featured snippets no Google e citacao por assistentes de IA.
export const blogFaqs: Record<string, BlogFaqItem[]> = {};
