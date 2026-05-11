import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      number: "01",
      title: "Introducao e Ambito",
      content: `O BestPTSitesDeApostas (bestptsitesdeapostas.com) esta empenhado na protecao da sua privacidade e no tratamento responsavel dos seus dados pessoais. Esta Politica de Privacidade descreve de forma clara e transparente como recolhemos, utilizamos, conservamos e protegemos as suas informacoes quando visita e utiliza o nosso website.

Ao aceder ao nosso site, confirma que leu e compreendeu esta politica. Se nao concordar com os termos aqui descritos, pedimos que nao utilize os nossos servicos.`,
    },
    {
      number: "02",
      title: "Dados que Recolhemos",
      content: `Dados fornecidos voluntariamente por si:
Endereco de email e nome quando nos contacta diretamente.
Conteudo das comunicacoes e mensagens que nos envia.
Respostas a inqueritos ou formularios de feedback.

Dados recolhidos automaticamente durante a navegacao:
Endereco IP e localizacao geografica aproximada.
Tipo de browser, sistema operativo e dispositivo utilizado.
Paginas visitadas, duracao das visitas e interacoes realizadas.
Dados de referencia indicando como chegou ao nosso site.
Cookies e tecnologias de rastreamento similares.`,
    },
    {
      number: "03",
      title: "Finalidades do Tratamento de Dados",
      content: `Utilizamos os dados recolhidos exclusivamente para:

Prestar e aprimorar os nossos servicos de comparacao e informacao de apostas.
Personalizar a experiencia de navegacao com base no seu perfil de utilizacao.
Analisar tendencias de uso e identificar oportunidades de melhoria continua.
Responder as suas questoes e pedidos de suporte ao utilizador.
Prevenir abusos, fraudes e garantir a seguranca e integridade do site.
Cumprir as obrigacoes legais e regulatorias aplicaveis em Portugal e na Uniao Europeia.`,
    },
    {
      number: "04",
      title: "Partilha de Dados com Terceiros",
      content: `O BestPTSitesDeApostas nao vende nem aluga os seus dados pessoais a terceiros. A partilha de dados pode ocorrer nas seguintes circunstancias limitadas:

Operadores de apostas parceiros quando clica num link afiliado e realiza um registo, transmitimos informacao tecnica necessaria ao rastreamento da conversao.
Prestadores de servicos tecnicos que nos apoiam na operacao do site, sujeitos a acordos de processamento de dados.
Autoridades competentes quando legalmente obrigados por lei, tribunal ou entidade reguladora portuguesa ou europeia.
Protecao de direitos em caso de necessidade de defesa de direitos legais do BestPTSitesDeApostas.`,
    },
    {
      number: "05",
      title: "Os Seus Direitos ao Abrigo do RGPD",
      content: `Como titular dos dados, e nos termos do Regulamento Geral sobre a Protecao de Dados (RGPD), tem os seguintes direitos:

Direito de Acesso para solicitar uma copia dos seus dados pessoais que tratamos.
Direito de Retificacao para corrigir dados incorretos ou incompletos.
Direito ao Apagamento para solicitar a eliminacao dos seus dados.
Direito a Limitacao para restringir temporariamente o tratamento dos seus dados.
Direito a Portabilidade para receber os seus dados num formato estruturado e legivel por maquina.
Direito de Oposicao para se opor ao tratamento com base em interesses legitimos.

Para exercer qualquer destes direitos, contacte-nos atraves do email indicado na seccao seguinte.`,
    },
    {
      number: "06",
      title: "Seguranca, Retencao e Contacto",
      content: `Medidas de seguranca implementadas:
Utilizamos encriptacao SSL/TLS em todas as comunicacoes, acesso restrito aos dados por pessoal autorizado e sistemas de monitorizacao para detetar acessos nao autorizados.

Periodo de retencao:
Conservamos os dados pelo tempo necessario as finalidades descritas ou pelo periodo legalmente exigido. Dados de analytics sao anonimizados ao fim de 26 meses.

Atualizacoes a esta politica:
Podemos rever esta politica periodicamente. Recomendamos que a consulte regularmente. A data de ultima atualizacao encontra-se no cabecalho deste documento.

Contacto do Responsavel pelo Tratamento:
Email: privacidade@bestptsitesdeapostas.com
Website: bestptsitesdeapostas.com
Localizacao: Lisboa, Portugal`,
    },
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
            Voltar para BestPTSitesDeApostas
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b-2 border-[#166534]">
        <div className="bg-[#166534] w-full">
          <div className="container mx-auto px-4 py-2">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Documento Legal</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-black text-[#0f1a0f] uppercase tracking-tight mb-3">
            Politica de Privacidade
          </h1>
          <p className="text-sm text-[#6b7280]">
            BestPTSitesDeApostas | bestptsitesdeapostas.com | Ultima atualizacao:{" "}
            {new Date().toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="border border-[#d1d5db] overflow-hidden hover:border-[#166534] transition-colors"
              style={{ borderTop: index !== 0 ? "none" : "1px solid #d1d5db" }}
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[#f0f0f0] bg-[#f9fafb]">
                <span className="text-2xl font-black text-[#e5e7eb]">{section.number}</span>
                <h2 className="text-sm font-bold text-[#0f1a0f] uppercase tracking-wide">{section.title}</h2>
              </div>
              <div className="px-6 py-5 text-sm text-[#374151] leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-10 pt-8 border-t border-[#d1d5db]">
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
