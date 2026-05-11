const features = [
  {
    number: "01",
    title: "Apenas Licencas SRIJ Validas",
    description:
      "Cada operador presente nesta plataforma possui licenca ativa emitida pelo SRIJ. Nao publicamos nem recomendamos sites sem regulacao portuguesa.",
  },
  {
    number: "02",
    title: "Testes Praticos Antes de Publicar",
    description:
      "A nossa equipa abre contas reais, deposita fundos proprios e testa cada plataforma na integra antes de qualquer classificacao aparecer neste site.",
  },
  {
    number: "03",
    title: "Conteudo Revisto Todos os Meses",
    description:
      "Odds, bonus e condicoes mudam com frequencia. Revisamos cada ficha de operador mensalmente para garantir que os dados publicados sao sempre atuais.",
  },
  {
    number: "04",
    title: "Mais de 60 000 Consultas por Mes",
    description:
      "Apostadores portugueses consultam este site regularmente para tomar decisoes informadas. A dimensao da audiencia reflete a confianca que depositam no nosso rigor.",
  },
  {
    number: "05",
    title: "Termos de Bonus Analisados em Detalhe",
    description:
      "Nunca publicamos uma oferta sem analisar os requisitos de apostas, limites de levantamento e prazos de validade. Leia o nosso resumo antes de reclamar qualquer bonus.",
  },
  {
    number: "06",
    title: "Classificacao Baseada em Desempenho",
    description:
      "Nenhum operador paga para figurar no topo. A posicao de cada site e determinada exclusivamente pelos resultados da nossa avaliacao objetiva e pelos dados recolhidos.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-10 md:py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-6 border-b-2 border-[#166534]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-5 bg-[#166534]" />
                <span className="text-xs font-bold text-[#166534] uppercase tracking-widest">
                  Porque Nos Escolher
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#0f1a0f] uppercase tracking-tight leading-none text-balance">
                Rigor Sem Concessoes.<br className="hidden md:block" /> Independencia Total.
              </h2>
            </div>
            <p className="text-sm text-[#6b7280] max-w-sm leading-relaxed md:text-right">
              Aplicamos os mesmos criterios a cada operador, sem excecoes. A nossa metodologia e publica e verificavel.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative p-7 bg-white border border-[#e5e7eb] hover:border-[#166534] hover:z-10 transition-colors duration-150 group"
                style={{
                  marginTop: index >= 3 ? "-1px" : "0",
                  marginLeft: index % 3 !== 0 && index % 1 === 0 ? "-1px" : "0",
                }}
              >
                {/* Number accent */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl font-black text-[#e5e7eb] group-hover:text-[#d1fae5] transition-colors leading-none select-none">
                    {feature.number}
                  </span>
                  <div className="w-2 h-2 bg-[#166534] mt-2 flex-shrink-0" />
                </div>
                <h3 className="text-sm font-black text-[#0f1a0f] uppercase tracking-wide mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom stat strip */}
          <div className="mt-0 grid grid-cols-3 border border-t-0 border-[#e5e7eb]">
            {[
              { value: "60 000+", label: "Visitas Mensais" },
              { value: "100%", label: "Independencia Editorial" },
              { value: "SRIJ", label: "Operadores Regulados" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-5 px-4 text-center bg-[#166534] ${i !== 2 ? "border-r border-[#14532d]" : ""}`}
              >
                <div className="text-xl md:text-2xl font-black text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
