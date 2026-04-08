const WA_LINK = 'https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.'

const pains = [
  'As linhas do rosto começaram a incomodar',
  'A flacidez tirou a firmeza que você tinha',
  'Seu corpo já não acompanha sua autoestima',
]

const fears = [
  { icon: '✦', text: 'Medo de resultados artificiais' },
  { icon: '✦', text: 'Não confia em qualquer profissional' },
  { icon: '✦', text: 'Não sabe por onde começar' },
]

export default function Empathy() {
  return (
    <section className="bg-cream-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Image placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden" style={{ paddingBottom: '120%' }}>
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80&fit=crop&crop=center"
                alt="Mulher refletindo sobre sua beleza"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
              />
              {/* Decorative corner frames */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold-400/60" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold-400/60" />
            </div>

            {/* Floating quote card */}
            {/* <div className="absolute -bottom-6 -right-4 md:-right-8 bg-cream-50 border border-cream-200 p-5 max-w-[200px] shadow-xl">
              <p className="font-serif italic text-charcoal-700 text-sm leading-relaxed">
                "Você não está sozinha."
              </p>
              <span className="block w-6 h-px bg-gold-400 mt-3" />
              <span className="text-gold-400 text-[10px] tracking-widest uppercase font-sans font-500 mt-2 block">
                Dra. Alana Dávila
              </span>
            </div> */}
          </div>

          {/* Right: copy */}
          <div className="order-1 md:order-2">
            <span className="section-tag block mb-5">Você se identifica?</span>

            <h2 className="heading-serif text-3xl md:text-4xl mb-8">
              Você já se olhou no espelho e sentiu que sua aparência não reflete mais{' '}
              <em className="italic text-gold-500">quem você é?</em>
            </h2>

            <div className="ornament-line mb-8 w-full" />

            <p className="text-charcoal-700/100 font-300 text-sm mb-6 font-sans leading-relaxed">
              Talvez você reconheça algum desses sentimentos:
            </p>

            <ul className="space-y-3 mb-10">
              {pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3 text-charcoal-700/100 font-sans font-300 text-sm">
                  <span className="text-gold-400 mt-0.5 text-base leading-none flex-shrink-0">—</span>
                  {pain}
                </li>
              ))}
            </ul>

            <div className="bg-blush-100 border-l-2 border-gold-400 px-6 py-5 mb-10">
              <p className="text-charcoal-800 font-sans text-base font-normal italic mb-4">
                E o pior… você até pensou em fazer algo, mas:
              </p>
              <ul className="space-y-2">
                {fears.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-charcoal-700/100 font-sans font-300 text-sm">
                    <span className="text-gold-400 text-[8px]">{f.icon}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-[25px]">
              Quero Transformação Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
