const WA_LINK = 'https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-cream-100">
      {/* Background: placeholder for doctor photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=1400&q=85&fit=crop&crop=top')`,
        }}
      >
        {/* Gradient overlay — warm cream/blush */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/90 via-cream-50/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-cream-50/20 to-transparent" />
      </div>

      {/* Ornamental vertical text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span
          className="text-gold-400/60 text-[9px] tracking-[0.4em] uppercase font-sans font-500"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Fortaleza · CE · Brasil
        </span>
        <span className="block w-px h-16 bg-gold-400/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-32 w-full">
        <div className="max-w-xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="block w-8 h-px bg-gold-400" />
            <span className="section-tag">Especialista em estética avançada</span>
          </div>

          {/* Headline */}
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up-delay-1">
            Redescubra sua{' '}
            <em className="font-serif italic font-300 text-gold-500">melhor versão</em>{' '}
            com naturalidade e resultados que impressionam
          </h1>

          {/* Subheadline */}
          <p className="text-charcoal-700/70 font-sans font-300 text-base leading-relaxed mb-10 animate-fade-up-delay-2 max-w-md">
            Tratamentos estéticos e cirurgias avançadas com uma das especialistas mais renomadas de Fortaleza — focados em realçar sua beleza sem exageros.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-center">
              Quero Minha Avaliação
            </a>
            <a href="#procedimentos" className="btn-outline text-center">
              Ver Procedimentos
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex items-center gap-6 mt-12 animate-fade-up-delay-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-cream-50 bg-blush-200 overflow-hidden"
                  style={{ backgroundImage: `url('https://i.pravatar.cc/40?img=${i + 10}')`, backgroundSize: 'cover' }}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-gold-400">
                    <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9.75 2.25 12l1.5-4.5L0 4.5h4.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal-700/60 text-[11px] font-sans tracking-wide">Centenas de pacientes atendidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-charcoal-700/40 text-[9px] tracking-[0.3em] uppercase font-sans font-500">Scroll</span>
        <span className="block w-px h-10 bg-charcoal-700/20" />
      </div>
    </section>
  )
}
