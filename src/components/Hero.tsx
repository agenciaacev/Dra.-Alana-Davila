const WA_LINK =
  "https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.";
// @ts-ignore
import backgroundImage from "../assets/dr-hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream-100 flex flex-col md:flex-row md:items-end">
      {/* Foto — mobile: topo, desktop: lado direito fixo */}
      <div className="relative w-full md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-auto object-contain md:h-full md:object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Gradiente lateral só no desktop */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-100/0 to-transparent" />
        {/* Gradiente de baixo no mobile */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-cream-100" />
      </div>

      {/* Gradiente de baixo no desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-cream-50 via-cream-50/10 to-transparent" />

      {/* Ornamental vertical text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span
          className="text-gold-400/60 text-[9px] tracking-[0.4em] uppercase font-sans font-500"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Plástica com Propósito
        </span>
        <span className="block w-px h-16 bg-gold-400/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-4 md:pt-32 w-full">
        <div className="max-w-xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="block w-8 h-px bg-gold-400" />
            <span className="section-tag">Médica - Cirurgiã Plástica</span>
          </div>

          {/* Headline */}
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up-delay-1 leading-tight">
            Redescubra a sua{" "}
            <em className="font-serif italic font-300 text-gold-500 whitespace-nowrap">
              melhor versão
            </em>{" "}
            com elegância, naturalidade e resultados que encantam.
          </h1>

          {/* Subheadline */}
          <p className="text-charcoal-700/100 font-sans font-300 text-base leading-relaxed mb-10 animate-fade-up-delay-2 max-w-md">
            Tratamentos estéticos e cirurgias avançadas conduzidos por uma das
            especialistas mais respeitadas de Fortaleza, com foco em valorizar a
            sua beleza de forma sutil, harmônica e sem excessos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center font-semibold rounded-[25px]"
            >
              Quero Minha Avaliação
            </a>
            <a
              href="#procedimentos"
              className="btn-outline text-center font-semibold rounded-[25px]"
            >
              Ver Procedimentos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-charcoal-700/40 text-[9px] tracking-[0.3em] uppercase font-sans font-500">
          Scroll
        </span>
        <span className="block w-px h-10 bg-charcoal-700/20" />
      </div>
    </section>
  );
}
