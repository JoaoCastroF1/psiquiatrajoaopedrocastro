import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ExternalLink } from "lucide-react";

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/5ydpr79sJQAfaCO788wNrf";

const episodes = [
  {
    title: "A IA pode nos curar de nós mesmos?",
    description:
      "A inteligência artificial já se aproxima da nossa escrita, da nossa rotina e até dos nossos modos de conversar. Neste episódio, o Antivírus discute o encontro entre tecnologia e clínica. O que uma máquina captura de nós? O que ela jamais alcança? E o que esse confronto revela sobre o funcionamento da mente, sobre desejo, sobre sofrimento e sobre o tipo de relação que sustenta um processo analítico?",
    date: "7 de novembro de 2025",
    duration: "43 min",
    url: "https://open.spotify.com/episode/23JTxbLkoz6b0BmI4dwIQe",
  },
  {
    title: "O diagnóstico psiquiátrico é uma sentença?",
    description:
      "Neste episódio piloto, abrimos a caixa-preta da saúde mental contemporânea. Vivemos uma era de rótulos fáceis, diagnósticos em alta velocidade e identidades moldadas por manuais. Combinando clínica, crítica e escuta, discutimos a história do diagnóstico, o biopoder por trás da medicalização do sofrimento, as diferenças entre o olhar psiquiátrico e a escuta psicanalítica — e por que, muitas vezes, a cura começa quando o sintoma deixa de ser um inimigo.",
    date: "30 de maio de 2025",
    duration: "51 min",
    url: "https://open.spotify.com/episode/6DeSZkJPJKbgsr7GeRiJP1",
  },
];

const podcastJsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Antivírus",
  description:
    "Podcast de orientação psicanalítica que contrapõe os discursos 'fast food' sobre saúde mental. Diagnóstico não é sentença — é ponto de partida para pensar.",
  url: SPOTIFY_SHOW_URL,
  author: {
    "@type": "Person",
    name: "Dr. João Pedro Castro",
  },
};

const Podcast = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Podcast Antivírus — Dr. João Pedro Castro | Psiquiatra em BH"
        description="Podcast sobre saúde mental, psiquiatria e psicanálise. Conversas sobre diagnóstico, medicação, sofrimento e os desafios da mente contemporânea."
        url="https://drjoaopedrocastro.com.br/podcast"
      />
      <JsonLd data={podcastJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Podcast" }]} />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 mt-2">
            Podcast · Orientação psicanalítica
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[0.95] mb-8 -tracking-[0.005em]">
            <em>Antivírus</em>
          </h1>
          <p className="font-display italic text-xl md:text-[1.4rem] text-foreground/85 leading-relaxed mb-6">
            Um podcast que contrapõe os discursos "fast food" sobre saúde mental.
          </p>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
            Aqui, diagnóstico não é sentença — é ponto de partida para pensar. Um espaço de conversa crítica, acolhedora e instigante sobre sofrimento, identidade e desejo.
          </p>
          <a
            href={SPOTIFY_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] text-white font-body text-sm uppercase tracking-[0.1em] px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Ouvir no Spotify
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-14 md:py-20 bg-section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Catálogo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-12">
            Episódios <em>disponíveis</em>
          </h2>
          <div className="space-y-6">
            {episodes.map((ep, i) => (
              <a
                key={i}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card p-8 md:p-10 transition-colors hover:bg-card/70"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    aria-hidden="true"
                    className="font-display italic text-coral text-3xl md:text-4xl leading-none"
                  >
                    {String(episodes.length - i).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-foreground group-hover:text-deep-green transition-colors">
                    {ep.title}
                  </h3>
                </div>
                <p className="font-body text-sm md:text-base text-foreground/85 leading-relaxed mb-5">
                  {ep.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-foreground/10">
                  <span className="font-display italic text-sm text-foreground/70">
                    {ep.date}
                  </span>
                  <span className="text-foreground/30">·</span>
                  <span className="font-display italic text-sm text-foreground/70">
                    {ep.duration}
                  </span>
                  <span className="text-foreground/30">·</span>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.15em] text-deep-green">
                    Ouvir <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Podcast;
