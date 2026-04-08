import { useState } from 'react'

const WA_LINK = 'https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.'

const procedures = [
  {
    id: 1,
    category: 'Facial',
    title: 'Botox & Rejuvenescimento',
    desc: 'Suavização de linhas e rugas com técnica natural. Resultado discreto e expressão preservada.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop&crop=center',
    tag: 'Mais procurado',
  },
  {
    id: 2,
    category: 'Facial',
    title: 'Blefaroplastia',
    desc: 'Cirurgia das pálpebras para um olhar mais jovem, descansado e expressivo.',
    image: 'https://images.unsplash.com/photo-1621798016705-290da649a3de?w=600&q=80&fit=crop&crop=center',
    tag: 'Rejuvenescimento',
  },
  {
    id: 3,
    category: 'Facial',
    title: 'Lifting Facial',
    desc: 'Tratamento da flacidez com técnicas avançadas para firmeza e contorno definido.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop',
    tag: 'Firmeza',
  },
  {
    id: 4,
    category: 'Corporal',
    title: 'Mastopexia com Prótese',
    desc: 'Levantamento de mama com ou sem prótese para restaurar volume, simetria e autoestima.',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80&fit=crop',
    tag: 'Transformação',
  },
  {
    id: 5,
    category: 'Corporal',
    title: 'Lipo para Lipedema',
    desc: 'Procedimento especializado no tratamento do lipedema com resultados funcionais e estéticos.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fit=crop',
    tag: 'Saúde & Estética',
  },
  {
    id: 6,
    category: 'Corporal',
    title: 'Abdominoplastia',
    desc: 'Redefinição do abdômen com remoção de excesso de pele, flacidez e lipoaspiração combinada.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80&fit=crop',
    tag: 'Completo',
  },
]

export default function Procedures() {
  const [filter, setFilter] = useState<'Todos' | 'Facial' | 'Corporal'>('Todos')

  const filtered = filter === 'Todos' ? procedures : procedures.filter((p) => p.category === filter)

  return (
    <section id="procedimentos" className="bg-cream-100 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag block mb-4">Procedimentos</span>
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">
            Soluções personalizadas para{' '}
            <em className="italic text-gold-500">seu rosto e corpo</em>
          </h2>
          <span className="gold-divider" />
          <p className="text-charcoal-700/60 font-sans font-300 text-sm max-w-md mx-auto leading-relaxed">
            Cada procedimento é planejado individualmente. Nada é feito sem um diagnóstico completo e alinhamento total com você.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(['Todos', 'Facial', 'Corporal'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 text-xs tracking-widest uppercase font-sans font-500 border transition-all duration-200 ${
                filter === tab
                  ? 'bg-gold-400 text-cream-50 border-gold-400'
                  : 'bg-transparent text-charcoal-700/60 border-charcoal-700/20 hover:border-gold-400/50 hover:text-gold-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map((proc) => (
            <div key={proc.id} className="group bg-cream-50 overflow-hidden border border-cream-200 hover:border-gold-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/10">
              <div className="relative overflow-hidden" style={{ paddingBottom: '65%' }}>
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-gold-400/90 text-cream-50 text-[9px] tracking-widest uppercase font-sans font-500 px-3 py-1">
                  {proc.tag}
                </span>
                <span className="absolute top-4 right-4 text-cream-50/70 text-[9px] tracking-widest uppercase font-sans font-300">
                  {proc.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-400 text-charcoal-800 text-lg mb-2">{proc.title}</h3>
                <p className="text-charcoal-700/60 font-sans font-300 text-sm leading-relaxed mb-5">
                  {proc.desc}
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 text-[10px] tracking-widest uppercase font-sans font-500 hover:text-gold-600 transition-colors flex items-center gap-2"
                >
                  Saber mais
                  <span className="block w-4 h-px bg-gold-400 group-hover:w-6 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-[25px]">
            Quero Minha Avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
