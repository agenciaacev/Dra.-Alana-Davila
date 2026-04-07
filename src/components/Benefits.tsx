const benefits = [
  {
    icon: '✦',
    title: 'Resultados Naturais',
    desc: 'Nenhuma aparência artificial — o objetivo é que ninguém perceba, só você sinta.',
  },
  {
    icon: '✦',
    title: 'Recuperação Orientada',
    desc: 'Acompanhamento completo em cada etapa, do pré ao pós-operatório.',
  },
  {
    icon: '✦',
    title: 'Totalmente Personalizado',
    desc: 'Plano único desenvolvido para o seu rosto, seu corpo e seus objetivos.',
  },
  {
    icon: '✦',
    title: 'Autoestima Elevada',
    desc: 'Aumento real da confiança — sinta-se bem na sua própria pele novamente.',
  },
  {
    icon: '✦',
    title: 'Atendimento Humanizado',
    desc: 'Você é tratada como única — com atenção, empatia e respeito em cada detalhe.',
  },
  {
    icon: '✦',
    title: 'Tecnologia Atualizada',
    desc: 'Técnicas e equipamentos de ponta para resultados seguros e eficientes.',
  },
  {
    icon: '✦',
    title: 'Planejamento Detalhado',
    desc: 'Nenhuma decisão é tomada sem análise completa e alinhamento com você.',
  },
  {
    icon: '✦',
    title: 'Segurança em Primeiro Lugar',
    desc: 'Exames, protocolos e acompanhamento para uma experiência tranquila e segura.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-cream-50 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative large serif text */}
      <div className="absolute -top-4 right-0 font-serif text-[180px] font-300 text-cream-200 leading-none select-none pointer-events-none hidden xl:block">
        AD
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="section-tag block mb-4">Por que escolher</span>
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">
            O que você ganha ao cuidar de{' '}
            <em className="italic text-gold-500">você</em>
          </h2>
          <span className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-200">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-cream-50 p-7 group hover:bg-blush-100 transition-colors duration-300"
            >
              <span className="text-gold-400 text-xs mb-4 block font-sans tracking-widest">{b.icon}</span>
              <h3 className="font-serif font-400 text-charcoal-800 text-base mb-2 group-hover:text-gold-600 transition-colors duration-200">
                {b.title}
              </h3>
              <p className="text-charcoal-700/60 font-sans font-300 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
