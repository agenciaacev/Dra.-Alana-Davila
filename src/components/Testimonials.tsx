import { useState, useEffect, useCallback, useRef } from 'react'

const WA_LINK = 'https://wa.me/5585992032233?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.'

const testimonials = [
  {
    quote: 'Eu voltei a me sentir bonita sem parecer artificial. Foi a melhor decisão que tomei.',
    name: 'Camila R.',
    procedure: 'Botox & Harmonização',
  },
  {
    quote: 'A Dra. Alana entende exatamente o que a gente quer — e entrega melhor ainda.',
    name: 'Fernanda L.',
    procedure: 'Mastopexia com Prótese',
  },
  {
    quote: 'Resultado completamente natural. Minha autoconfiança voltou em dobro após a blefaroplastia.',
    name: 'Patrícia M.',
    procedure: 'Blefaroplastia',
  },
  {
    quote: 'Dez anos sumiram do meu rosto, mas ninguém sabe dizer exatamente o quê mudou. Isso é naturalidade.',
    name: 'Juliana S.',
    procedure: 'Lifting Facial',
  },
  {
    quote: 'Depois da abdominoplastia me olhei no espelho e chorei de alegria. Resultado incrível e recuperação tranquila.',
    name: 'Roberta A.',
    procedure: 'Abdominoplastia',
  },
  {
    quote: 'Sofri com lipedema por anos sem diagnóstico. A Dra. Alana me devolveu saúde e autoestima ao mesmo tempo.',
    name: 'Mariana C.',
    procedure: 'Lipo para Lipedema',
  },
  {
    quote: 'Desde a primeira consulta senti que estava em boas mãos. Ela escutou tudo que eu queria e respeitou cada detalhe.',
    name: 'Beatriz N.',
    procedure: 'Avaliação & Planejamento',
  },
]

const stats = [
  { value: '500+', label: 'Pacientes atendidas' },
  { value: '100%', label: 'Foco em naturalidade' },
  { value: '10+', label: 'Anos de experiência' },
  { value: '★ 5.0', label: 'Avaliação média' },
]

// Clones nas pontas para loop infinito sem pulo visual
const CLONE = 3
const total = testimonials.length
const extended = [
  ...testimonials.slice(total - CLONE), // últimos 3 clonados no início
  ...testimonials,
  ...testimonials.slice(0, CLONE),      // primeiros 3 clonados no fim
]
const EXT = extended.length // 13
const START = CLONE           // índice real do primeiro card (3)

function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="border border-cream-50/10 p-8 hover:border-gold-400/30 transition-colors duration-300 h-full flex flex-col">
      <span className="font-serif text-5xl font-300 text-gold-400/20 leading-none block mb-4">"</span>
      <p className="font-serif italic font-300 text-cream-50/80 text-base leading-relaxed mb-8 flex-1">
        {t.quote}
      </p>
      <div className="pt-6 border-t border-cream-50/10">
        <p className="text-cream-50 font-sans font-500 text-sm">{t.name}</p>
        <p className="text-gold-400/70 text-[10px] tracking-wider uppercase font-sans font-300 mt-1">
          {t.procedure}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [idx, setIdx] = useState(START)
  const [paused, setPaused] = useState(false)
  const desktopRef = useRef<HTMLDivElement>(null)
  const mobileRef  = useRef<HTMLDivElement>(null)
  const snapTimer  = useRef<ReturnType<typeof setTimeout>>()

  // pct é relativo à largura da própria trilha (translateX usa % do elemento)
  const pct = idx * (100 / EXT)
  const realCurrent = ((idx - CLONE) % total + total) % total

  const snap = useCallback((toIdx: number) => {
    ;[desktopRef, mobileRef].forEach(r => {
      if (r.current) r.current.style.transitionDuration = '0ms'
    })
    setIdx(toIdx)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        ;[desktopRef, mobileRef].forEach(r => {
          if (r.current) r.current.style.transitionDuration = ''
        })
      })
    )
  }, [])

  // Após a animação terminar, reposiciona para o card real equivalente
  useEffect(() => {
    if (snapTimer.current) clearTimeout(snapTimer.current)

    if (idx >= total + CLONE) {
      snapTimer.current = setTimeout(
        () => snap(CLONE + (idx - total - CLONE)),
        580
      )
    } else if (idx < CLONE) {
      snapTimer.current = setTimeout(() => snap(total + idx), 580)
    }

    return () => clearTimeout(snapTimer.current)
  }, [idx, snap])

  const next = useCallback(() => setIdx(i => i + 1), [])
  const prev = useCallback(() => setIdx(i => i - 1), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused])

  const track = (ref: React.Ref<HTMLDivElement>, trackWidthPct: number) => (
    <div
      ref={ref}
      className="flex"
      style={{
        width: `${trackWidthPct}%`,
        transform: `translateX(-${pct}%)`,
        transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}
    >
      {extended.map((t, i) => (
        <div key={i} style={{ width: `${100 / EXT}%` }} className="px-3">
          <Card t={t} />
        </div>
      ))}
    </div>
  )

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

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-tag text-gold-300 block mb-4">Prova Social</span>
          <h2 className="font-serif font-300 text-cream-50 text-3xl md:text-4xl mb-4">
            O que nossas pacientes{' '}
            <em className="italic text-gold-300">dizem</em>
          </h2>
          <span className="block w-12 h-px bg-gold-400/50 mx-auto my-6" />
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden mb-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Desktop — 3 cards visíveis: trilha = EXT/3 * 100% do container */}
          <div className="hidden md:block overflow-hidden">
            {track(desktopRef, (EXT / 3) * 100)}
          </div>

          {/* Mobile — 1 card visível: trilha = EXT * 100% do container */}
          <div className="md:hidden overflow-hidden">
            {track(mobileRef, EXT * 100)}
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button
            onClick={prev}
            className="w-9 h-9 border border-cream-50/20 text-cream-50/50 hover:border-gold-400/60 hover:text-gold-300 transition-all duration-200 flex items-center justify-center text-sm"
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(CLONE + i)}
                className={`transition-all duration-300 ${
                  i === realCurrent
                    ? 'w-6 h-1 bg-gold-400'
                    : 'w-2 h-1 bg-cream-50/20 hover:bg-cream-50/40'
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 border border-cream-50/20 text-cream-50/50 hover:border-gold-400/60 hover:text-gold-300 transition-all duration-200 flex items-center justify-center text-sm"
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-300/60 text-gold-300 font-sans font-500 tracking-widest uppercase text-xs px-8 py-4 transition-all duration-300 hover:bg-gold-400 hover:text-cream-50 hover:border-gold-400 rounded-[25px]"
          >
            Quero Minha Avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
