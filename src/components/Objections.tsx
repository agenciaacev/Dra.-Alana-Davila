import { useState } from 'react'

const WA_LINK = 'https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.'

const objections = [
  {
    q: '"Tenho medo de ficar artificial…"',
    a: 'O foco da Dra. Alana é naturalidade total — o resultado ideal é aquele que ninguém percebe, mas você sente profundamente. Cada detalhe é planejado para realçar, jamais exagerar.',
  },
  {
    q: '"Cirurgia é arriscado?"',
    a: 'Todo procedimento é planejado com segurança absoluta, exames completos e acompanhamento em cada etapa. A sua segurança é a prioridade número um.',
  },
  {
    q: '"Não sei qual procedimento é ideal para mim…"',
    a: 'É exatamente para isso que existe a avaliação personalizada. Você não precisa saber — a Dra. Alana analisa seu caso e indica o melhor caminho antes de qualquer decisão.',
  },
  {
    q: '"É muito caro?"',
    a: 'Existem opções e planos ajustados ao seu objetivo e realidade. O investimento em você é conversado com transparência na consulta.',
  },
  {
    q: '"E se eu me arrepender?"',
    a: 'Nada é decidido sem planejamento detalhado e alinhamento completo com você. Só avançamos quando você estiver 100% segura e confiante na decisão.',
  },
]

export default function Objections() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        <div className="text-center mb-14">
          <span className="section-tag block mb-4">Suas dúvidas</span>
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">
            Respondendo com{' '}
            <em className="italic text-gold-500">honestidade</em>
          </h2>
          <span className="gold-divider" />
        </div>

        <div className="space-y-px bg-cream-200">
          {objections.map((item, i) => (
            <div key={i} className="bg-cream-50">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-8 py-6 text-left group"
              >
                <span className="font-serif italic text-charcoal-800 text-base md:text-lg font-300 group-hover:text-gold-600 transition-colors duration-200">
                  {item.q}
                </span>
                <span className={`text-gold-400 flex-shrink-0 text-lg transition-transform duration-300 mt-0.5 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                <div className="px-8 pb-7 border-t border-cream-200">
                  <span className="block w-6 h-px bg-gold-400/50 mb-4 mt-4" />
                  <p className="text-charcoal-700/70 font-sans font-300 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-charcoal-700/50 font-sans font-300 text-sm mb-6">
            Ainda tem dúvidas? Fale diretamente com a equipe da Dra. Alana.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-[25px]">
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  )
}
