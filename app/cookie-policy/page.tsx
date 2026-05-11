import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function CookiePolicyPage() {
  const sections = [
    {
      number: "01",
      title: "O Que Sao Cookies",
      content: `Os cookies sao pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Sao amplamente utilizados para que os sites funcionem de forma eficiente, para melhorar a experiencia de navegacao e para fornecer informacoes de analise aos operadores do site.

Os cookies podem ser persistentes, permanecendo apos fechar o navegador durante um periodo definido, ou de sessao, sendo eliminados automaticamente quando termina a sessao de navegacao.`,
    },
    {
      number: "02",
      title: "Como Utilizamos Cookies",
      content: `O BestPTSitesDeApostas utiliza cookies para os seguintes fins:

Preservar as suas preferencias de navegacao e configuracoes de interface.
Analisar o comportamento dos visitantes para melhorar o site continuamente.
Personalizar o conteudo apresentado com base no seu perfil de utilizacao.
Rastrear cliques em links de parceiros afiliados para efeitos de comissionamento.
Garantir o correto funcionamento de funcionalidades interativas do site.`,
    },
    {
      number: "03",
      title: "Categorias de Cookies Utilizados",
      content: `Cookies Estritamente Necessarios
Indispensaveis ao funcionamento tecnico do site. Sem eles, servicos essenciais nao podem ser prestados. Nao requerem consentimento do utilizador.

Cookies de Desempenho e Analise
Recolhem dados anonimos sobre como os visitantes navegam no site, permitindo identificar erros e melhorar o desempenho geral.

Cookies de Funcionalidade
Permitem que o site recorde as suas preferencias, como idioma, regiao e consentimentos dados, entre visitas.

Cookies de Marketing e Afiliados
Utilizados para rastrear cliques em links de parceiros e medir a eficacia de campanhas promocionais.`,
    },
    {
      number: "04",
      title: "Cookies de Terceiros",
      content: `Para alem dos nossos cookies proprios, utilizamos tecnologias de terceiros que podem colocar os seus proprios cookies no seu dispositivo:

Google Analytics para analise de trafego e comportamento de utilizadores.
Redes de afiliados para rastreamento de cliques e conversoes para operadores parceiros.
Plataformas de publicidade para exibicao de anuncios contextuais e medicao de campanhas.

Estes terceiros possuem as suas proprias politicas de privacidade, que recomendamos que consulte diretamente.`,
    },
    {
      number: "05",
      title: "Cookies de Afiliados e Transparencia Comercial",
      content: `Como comparador de casas de apostas, utilizamos cookies de afiliados para registar quando um utilizador clica num link para um operador parceiro e subsequentemente realiza um registo ou deposito. Estes cookies permitem-nos receber uma comissao comercial.

Esta relacao comercial nao afeta o preco que paga, as condicoes do bonus que recebe, nem a nossa avaliacao editorial dos operadores. A nossa politica de classificacao e inteiramente independente das parcerias comerciais estabelecidas.`,
    },
    {
      number: "06",
      title: "Gestao e Controlo de Cookies",
      content: `Pode gerir, restringir ou eliminar cookies atraves das definicoes do seu navegador:

Google Chrome: Definicoes, Privacidade e Seguranca, Cookies e outros dados de sites.
Mozilla Firefox: Opcoes, Privacidade e Seguranca, Cookies e dados de sites.
Safari: Preferencias, Privacidade, Gerir dados de sites.
Microsoft Edge: Definicoes, Cookies e permissoes do site.

Pode igualmente revogar o seu consentimento a qualquer momento atraves do nosso painel de preferencias de cookies. A desativacao de determinados cookies pode limitar a funcionalidade de algumas secoes do site.

Contacto: cookies@bestptsitesdeapostas.com`,
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
            Politica de Cookies
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
