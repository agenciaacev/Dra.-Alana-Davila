const WA_LINK =
  "https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.";
//@ts-ignore
import imgCirurgia from "../assets/dr-cirurgia.jpeg";
const pillars = [
  {
    number: "01",
    title: "Experiência que gera confiança",
    desc: "Atendimento de alto nível, personalizado, com precisão e segurança em cada detalhe.",
  },
  {
    number: "02",
    title: "Acompanhamento completo",
    desc: "Suporte contínuo em todas as etapas, do pré ao pós-operatório, com cuidado e segurança.",
  },
  {
    number: "03",
    title: "Tecnologia e excelência",
    desc: "Métodos modernos e tecnologia de ponta para resultados precisos, seguros e naturais.",
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
              Dra. Alana D'avila{" "}
              <em className="italic text-gold-300">excelência </em>
              em cirurgia plástica
            </h2>
            <div className="ornament-line mb-8 w-full" />
            <p className="text-cream-200/60 font-sans font-300 text-sm leading-relaxed mb-8 font-poppins">
              Sou médica cirurgiã plástica em Fortaleza, com prática consolidada
              e compromisso com a excelência em cada detalhe. Desenvolvo
              abordagens exclusivas e acompanho de forma criteriosa todas as
              etapas do processo, com precisão técnica, sensibilidade estética e
              máxima segurança, para entregar resultados harmônicos, elegantes e
              duradouros, sempre respeitando a essência de cada paciente.
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
