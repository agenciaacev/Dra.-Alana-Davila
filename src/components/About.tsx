const WA_LINK =
  "https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  import imgCirurgia from '../assets/dr-foto-cirurgia.png'
const pillars = [
  {
    number: "01",
    title: "Técnica Refinada",
    desc: "Cirurgia plástica e estética com precisão e atualização constante nos melhores protocolos.",
  },
  {
    number: "02",
    title: "Visão Estética",
    desc: "Olhar sofisticado para equilíbrio e proporção — nunca exageros, sempre elegância.",
  },
  {
    number: "03",
    title: "Foco em Naturalidade",
    desc: "O resultado ideal é aquele que ninguém percebe — só você sente a diferença.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-charcoal-800 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Top intro */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="section-tag text-gold-300 block mb-5">
              A solução
            </span>
            <h2 className="font-serif font-300 text-cream-50 text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Dra. Alana D'avila {" "}
              <em className="italic text-gold-300">excelência </em>
               em cirurgia plástica
            </h2>
            <div className="ornament-line mb-8 w-full" />
            <p className="text-cream-200/60 font-sans font-300 text-sm leading-relaxed mb-8 font-poppins">
              Médica cirurgiã plástica com atuação consolidada em Fortaleza,
              reconhecida por sua precisão técnica e olhar estético refinado.
              Referência em cirurgia plástica, contorno corporal e prótese
              mamária, conduz cada caso com planejamento minucioso e abordagem
              personalizada, valorizando a harmonia, a naturalidade e a
              singularidade de cada paciente, com segurança e sofisticação em
              cada detalhe.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold-300/60 text-gold-300 font-sans font-500 tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 hover:bg-gold-400 hover:text-cream-50 hover:border-gold-400 rounded-[25px]"
            >
              Quero Minha Avaliação
            </a>
          </div>

          {/* Doctor image */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ paddingBottom: "110%" }}
            >
              <img
                src={imgCirurgia}
                alt="Dra. Alana Dávila em atendimento"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/60 to-transparent" />
            </div>

            {/* Credential badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-charcoal-900/80 backdrop-blur-sm border border-gold-400/20 px-5 py-4">
              <p className="text-gold-300 text-[10px] tracking-[0.3em] uppercase font-sans font-500 mb-1">
                Especialidade reconhecida
              </p>
              <p className="text-cream-50 font-serif font-300 text-sm">
                Estética Avançada · Fortaleza – CE
              </p>
            </div>

            {/* Decorative frames */}
            <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-gold-400/40" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-gold-400/20" />
          </div>
        </div>

        {/* Pillars */}
        <div className="ornament-line mb-12 w-full" />
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="border border-cream-50/10 p-8 relative group hover:border-gold-400/40 transition-colors duration-300"
            >
              <span className="font-serif text-5xl font-300 text-gold-400/20 group-hover:text-gold-400/40 transition-colors duration-300 block mb-4 leading-none">
                {p.number}
              </span>
              <h3 className="text-cream-50 font-serif font-300 text-xl mb-3">
                {p.title}
              </h3>
              <p className="text-cream-200/50 font-sans font-300 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
