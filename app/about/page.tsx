import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  const pillars = [
    {
      number: "01",
      title: "Transparencia Total",
      desc: "Divulgamos como geramos receita e os criterios exatos que utilizamos para classificar cada operador de apostas.",
    },
    {
      number: "02",
      title: "Independencia Editorial",
      desc: "Nenhum operador pode pagar para melhorar a sua posicao. As classificacoes assentam exclusivamente no desempenho verificado.",
    },
    {
      number: "03",
      title: "Foco no Mercado Nacional",
      desc: "Especializamo-nos em Portugal: regulacao SRIJ, metodos de pagamento nacionais e suporte em portugues.",
    },
  ]

  const values = [
    {
      title: "Testes em Primeira Mao",
      description:
        "Cada membro da equipa cria contas reais, deposita fundos e testa o suporte ao cliente antes de publicar qualquer avaliacao.",
    },
    {
      title: "Atualizacao Mensal",
      description:
        "O mercado muda com frequencia: bonus expiram, odds evoluem, funcionalidades sao revistas. Atualizamos todas as avaliacoes todos os meses.",
    },
    {
      title: "Jogo Responsavel em Primeiro",
      description:
        "Incluimos recursos de jogo responsavel, limites recomendados e alertas de risco em todas as nossas analises e recomendacoes.",
    },
  ]

  const steps = [
    "Verificamos a validade da licenca SRIJ diretamente no portal oficial do regulador",
    "Registamos uma conta real e completamos o processo de verificacao de identidade",
    "Depositamos fundos e testamos todos os metodos de pagamento disponiveis",
    "Avaliamos a profundidade e qualidade dos mercados desportivos oferecidos",
    "Analisamos os bonus, lemos os termos na integra e calculamos o valor real para o apostador",
    "Contactamos o suporte ao cliente em multiplos canais e registamos os tempos de resposta",
    "Testamos a versao mobile e a aplicacao nativa em iOS e Android",
    "Revemos a classificacao mensalmente com base em alteracoes na plataforma",
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="border-b border-[#d1d5db] bg-white">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#166534] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Melhores Sites de Apostas Portugal
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-white border-b-2 border-[#166534]">
        <div className="bg-[#166534] w-full">
          <div className="container mx-auto px-4 py-2">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Sobre Nos</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-black text-[#0f1a0f] uppercase tracking-tight text-balance leading-tight mb-4">
              O Comparador de Apostas de Referencia em Portugal
            </h1>
            <p className="text-lg text-[#374151] leading-relaxed max-w-2xl">
              Ajudamos apostadores portugueses a encontrar os melhores operadores licenciados. A nossa metodologia
              e independente, transparente e baseada em testes reais, nao em comissoes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#f9fafb] border-b border-[#d1d5db]">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: "50 000+", label: "Apostadores mensais" },
              { value: "100%", label: "Operadores SRIJ" },
              { value: "15+", label: "Operadores avaliados" },
              { value: "99%", label: "Precisao editorial" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-5 border border-[#d1d5db] text-center"
                style={{ borderLeft: i !== 0 ? "none" : "1px solid #d1d5db" }}
              >
                <p className="text-2xl font-black text-[#166534] leading-none">{stat.value}</p>
                <p className="text-xs text-[#6b7280] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white container mx-auto px-4 py-12 md:py-16">
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-14 pb-14 border-b-2 border-[#166534]">
          <span className="text-xs font-bold text-[#166534] uppercase tracking-widest block mb-3">A Nossa Missao</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f1a0f] uppercase tracking-tight mb-5 text-balance">
            Informacao Imparcial para Decisoes Mais Inteligentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#374151] leading-relaxed mb-4 text-sm">
                No site Melhores Sites de Apostas Portugal, acreditamos que todo o apostador merece acesso a informacao clara, honesta
                e atualizada. O mercado portugues conta com dezenas de operadores licenciados e cada um tem pontos
                fortes e fracos distintos que devem ser conhecidos antes de qualquer registo.
              </p>
              <p className="text-[#374151] leading-relaxed text-sm">
                A nossa equipa testa pessoalmente cada plataforma desde o registo ate ao levantamento de fundos,
                para que possa tomar uma decisao informada. Geramos receita atraves de parcerias de afiliados, mas
                isso nunca influencia as nossas classificacoes ou avaliacoes editoriais.
              </p>
            </div>
            <div className="space-y-0">
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 border border-[#d1d5db] hover:border-[#166534] hover:bg-[#f0f7f0] transition-all duration-150"
                  style={{ borderTop: i !== 0 ? "none" : "1px solid #d1d5db" }}
                >
                  <span className="text-2xl font-black text-[#e5e7eb] flex-shrink-0">{item.number}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f1a0f] uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="text-xs text-[#6b7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-4xl mx-auto mb-14 pb-14 border-b border-[#d1d5db]">
          <span className="text-xs font-bold text-[#166534] uppercase tracking-widest block mb-3">Os Nossos Pilares</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f1a0f] uppercase tracking-tight mb-8 text-balance">
            O Que Nos Distingue de Outros Comparadores
          </h2>
          <div className="grid md:grid-cols-3 gap-0">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="p-5 border border-[#d1d5db] hover:border-[#166534] hover:bg-[#f0f7f0] transition-all duration-150"
                style={{ borderLeft: i !== 0 ? "none" : "1px solid #d1d5db" }}
              >
                <span className="text-3xl font-black text-[#e5e7eb] block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-[#0f1a0f] uppercase tracking-wide mb-2">{value.title}</h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-[#166534] uppercase tracking-widest block mb-3">Processo de Avaliacao</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f1a0f] uppercase tracking-tight mb-8 text-balance">
            Como Testamos e Classificamos Cada Operador
          </h2>
          <div className="space-y-0">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-[#d1d5db] hover:border-[#166534] hover:bg-[#f0f7f0] transition-all duration-150"
                style={{ borderTop: index !== 0 ? "none" : "1px solid #d1d5db" }}
              >
                <div className="flex-shrink-0 w-7 h-7 bg-[#166534] flex items-center justify-center font-bold text-white text-xs">
                  {index + 1}
                </div>
                <p className="text-sm text-[#374151] flex-1">{item}</p>
                <svg className="w-4 h-4 text-[#166534] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-[#d1d5db]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#166534] transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Pagina Inicial
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
