const WA_LINK = 'https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.'

const testimonials = [
  {
    quote: 'Eu voltei a me sentir bonita sem parecer artificial. Foi a melhor decisão que tomei.',
    name: 'Camila R.',
    procedure: 'Botox & Harmonização',
    avatar: 'https://i.pravatar.cc/80?img=44',
  },
  {
    quote: 'A Dra. Alana entende exatamente o que a gente quer — e entrega melhor ainda.',
    name: 'Fernanda L.',
    procedure: 'Mastopexia com Prótese',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    quote: 'Resultado completamente natural. Minha autoconfiança voltou em dobro após a blefaroplastia.',
    name: 'Patrícia M.',
    procedure: 'Blefaroplastia',
    avatar: 'https://i.pravatar.cc/80?img=53',
  },
]

const stats = [
  { value: '500+', label: 'Pacientes atendidas' },
  { value: '100%', label: 'Foco em naturalidade' },
  { value: '10+', label: 'Anos de experiência' },
  { value: '★ 5.0', label: 'Avaliação média' },
]

export default function Testimonials() {
  return (
    <section id="resultados" className="bg-charcoal-800 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream-50/10 border border-cream-50/10 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-10 px-4 bg-charcoal-800 hover:bg-charcoal-900 transition-colors duration-200">
              <span className="font-serif text-3xl font-300 text-gold-300 block mb-2">{s.value}</span>
              <span className="text-cream-200/40 text-[10px] tracking-[0.25em] uppercase font-sans font-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="section-tag text-gold-300 block mb-4">Prova Social</span>
          <h2 className="font-serif font-300 text-cream-50 text-3xl md:text-4xl mb-4">
            O que nossas pacientes{' '}
            <em className="italic text-gold-300">dizem</em>
          </h2>
          <span className="block w-12 h-px bg-gold-400/50 mx-auto my-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-cream-50/10 p-8 hover:border-gold-400/30 transition-colors duration-300 relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-5xl font-300 text-gold-400/20 leading-none block mb-4">"</span>
              <p className="font-serif italic font-300 text-cream-50/80 text-base leading-relaxed mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-cream-50/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover grayscale-[30%]"
                />
                <div>
                  <p className="text-cream-50 font-sans font-500 text-sm">{t.name}</p>
                  <p className="text-gold-400/70 text-[10px] tracking-wider uppercase font-sans font-300">{t.procedure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/after placeholder */}
        <div className="text-center bg-cream-50/5 border border-cream-50/10 p-10 mb-10">
          <p className="text-cream-200/50 font-sans font-300 text-sm tracking-wide mb-2">
            📸 Área reservada para fotos antes & depois
          </p>
          <p className="text-cream-200/30 font-sans font-300 text-xs">
            Insira aqui os prints e resultados reais das pacientes
          </p>
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-300/60 text-gold-300 font-sans font-500 tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 hover:bg-gold-400 hover:text-cream-50 hover:border-gold-400"
          >
            Quero Minha Avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
