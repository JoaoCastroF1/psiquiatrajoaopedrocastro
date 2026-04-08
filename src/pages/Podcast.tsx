import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { Headphones, ExternalLink, Clock, Calendar } from "lucide-react";

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
      <JsonLd data={podcastJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <Headphones className="w-4 h-4" />
            <span className="font-body text-xs uppercase tracking-[0.15em]">Podcast</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Antivírus
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Um podcast de orientação psicanalítica que contrapõe os discursos "fast food" sobre saúde mental. 
            Aqui, diagnóstico não é sentença — é ponto de partida para pensar. Um espaço de conversa crítica, 
            acolhedora e instigante sobre sofrimento, identidade e desejo.
          </p>
          <a
            href={SPOTIFY_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] text-white font-body text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Ouvir no Spotify
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-10">
            Episódios
          </h2>
          <div className="space-y-8">
            {episodes.map((ep, i) => (
              <a
                key={i}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                      {ep.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {ep.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {ep.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {ep.duration}
                      </span>
                    </div>
                  </div>
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
