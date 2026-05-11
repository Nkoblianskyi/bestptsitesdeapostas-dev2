const criteria = [
  { label: "Seguranca e Licenca SRIJ Ativa", value: 100 },
  { label: "Profundidade dos Mercados Desportivos", value: 94 },
  { label: "Competitividade das Odds Praticadas", value: 89 },
  { label: "Clareza e Valor dos Bonus", value: 85 },
  { label: "Aplicacao Movel e Desempenho", value: 91 },
]

const pillars = [
  {
    code: "A",
    title: "Odds e Mercados",
    description:
      "Monitorizamos as cotacoes de cada operador em eventos reais e comparamos a profundidade de mercados disponivel, incluindo ligas portuguesas e competicoes europeias.",
  },
  {
    code: "B",
    title: "Seguranca e Licenciamento",
    description:
      "Verificamos a validade de cada licenca SRIJ antes de qualquer publicacao. Operadores sem regulacao portuguesa nunca aparecem nesta plataforma.",
  },
  {
    code: "C",
    title: "Bonus e Condicoes Reais",
    description:
      "Lemos os termos completos de cada promocao. Publicamos os requisitos de apostas, prazos e restricoes de forma clara, sem linguagem enganosa.",
  },
  {
    code: "D",
    title: "Suporte e Metodos de Pagamento",
    description:
      "Testamos o atendimento ao cliente e verificamos a disponibilidade de MB Way, Multibanco e outros metodos de pagamento disponiveis em Portugal.",
  },
]

export function BettingInfoSection() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-[#166534]" />
            <span className="text-xs font-bold text-[#166534] uppercase tracking-widest">Metodologia</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-6 border-b-2 border-[#166534]">
            <h2 className="text-2xl md:text-4xl font-black text-[#0f1a0f] uppercase tracking-tight leading-none text-balance">
              Como Avaliamos<br className="hidden md:block" /> Cada Operador
            </h2>
            <p className="text-sm text-[#6b7280] max-w-sm leading-relaxed md:text-right">
              Quatro pilares objetivos testados em campo por analistas com contas reais abertas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: criteria bars */}
            <div>
              <p className="text-[#374151] text-sm leading-relaxed mb-8 max-w-lg">
                Cada operador e submetido a uma grelha de avaliacao uniforme. Abrimos contas, efetuamos depositos,
                testamos levantamentos e avaliamos o suporte ao cliente antes de publicar qualquer pontuacao.
                Os resultados abaixo refletem os valores medios dos operadores atualmente listados.
              </p>

              <div className="space-y-6">
                {criteria.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs font-bold text-[#374151] uppercase tracking-wide">{item.label}</span>
                      <span className="text-sm font-black text-[#166534]">{item.value}/100</span>
                    </div>
                    <div className="h-2 bg-[#f0f0f0] relative">
                      <div
                        className="h-full bg-[#166534]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footnote */}
              <p className="text-xs text-[#9ca3af] mt-6 border-l-2 border-[#e5e7eb] pl-3 leading-relaxed">
                Pontuacoes recalculadas mensalmente com base em testes praticos e feedback verificado de utilizadores
                portugueses. Ultima atualizacao: {new Date().toLocaleDateString("pt-PT", { month: "long", year: "numeric" })}.
              </p>
            </div>

            {/* Right: pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.code}
                  className="p-6 border border-[#e5e7eb] hover:border-[#166534] hover:bg-[#f9fafb] transition-colors duration-150 group"
                  style={{
                    marginTop: index >= 2 ? "-1px" : "0",
                    marginLeft: index % 2 !== 0 ? "-1px" : "0",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#166534] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-xs">{pillar.code}</span>
                    </div>
                    <h3 className="font-black text-xs text-[#0f1a0f] uppercase tracking-wide leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
