"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "As apostas desportivas online sao legais em Portugal?",
    answer:
      "Sim. Em Portugal, as apostas desportivas online sao reguladas pela lei n.o 66/2015 e supervisionadas pelo SRIJ. Qualquer pessoa com 18 anos ou mais pode apostar legalmente em plataformas que detenham licenca emitida por este orgao regulador. Todos os operadores listados neste site cumprem este requisito obrigatorio.",
  },
  {
    question: "Como seleciono o operador mais adequado para o meu perfil?",
    answer:
      "Identifique as suas prioridades: se valoriza odds elevadas, compare as cotacoes em eventos identicos entre diferentes operadores. Se pretende variedade de mercados, verifique a cobertura desportiva disponivel. Se o bonus e determinante, leia os requisitos de apostas na totalidade antes de criar qualquer conta.",
  },
  {
    question: "Que metodos de pagamento estao disponiveis nos operadores portugueses?",
    answer:
      "Os operadores licenciados para o mercado portugues disponibilizam habitualmente MB Way, Multibanco, cartoes Visa e Mastercard, transferencia bancaria e carteiras digitais como Neteller e Skrill. Os depositos sao geralmente processados de forma imediata; os levantamentos demoram entre 24 e 72 horas conforme o metodo selecionado.",
  },
  {
    question: "O que significam os requisitos de apostas de um bonus?",
    answer:
      "Os requisitos de apostas indicam o numero de vezes que deve apostar o montante do bonus antes de poder levantar quaisquer ganhos. Por exemplo, um bonus de 50 euros com requisito de 5x obriga-o a apostar 250 euros em mercados elegiveis antes de qualquer transferencia de fundos.",
  },
  {
    question: "Os meus depositos estao protegidos numa plataforma licenciada?",
    answer:
      "Sim. Os operadores com licenca SRIJ sao legalmente obrigados a manter os fundos dos clientes em contas segregadas, separadas dos fundos operacionais da empresa. Alem disso, todas as transacoes sao protegidas por encriptacao SSL. Verifique sempre o certificado SRIJ antes de efetuar qualquer deposito.",
  },
  {
    question: "Posso apostar pelo telemovel em qualquer operador?",
    answer:
      "Sim. Todos os principais operadores disponiveis em Portugal oferecem aplicacoes nativas para iOS e Android, ou versoes moveis otimizadas com funcionalidades equivalentes a versao de secretaria. E possivel acompanhar eventos ao vivo, gerir saldos e colocar apostas a partir de qualquer dispositivo com ligacao a internet.",
  },
  {
    question: "Qual e a idade minima para criar uma conta num site de apostas?",
    answer:
      "Em Portugal, a idade minima legal para participar em jogos a dinheiro e de 18 anos. Todos os operadores licenciados sao obrigados por lei a verificar a identidade do utilizador atraves de documento de identificacao valido durante o processo de registo, antes de autorizar qualquer deposito.",
  },
  {
    question: "Como funciona o sistema de classificacao do BestPTSitesDeApostas?",
    answer:
      "Avaliamos cada operador numa escala de 0 a 10 com base em seis criterios: licenciamento e validade da licenca SRIJ, seguranca tecnica e protecao de dados, mercados desportivos e qualidade das odds, estrutura e transparencia dos bonus, metodos de pagamento disponiveis e qualidade do suporte ao cliente. As pontuacoes sao revistas mensalmente com base em dados atuais.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-[#166534]" />
            <span className="text-xs font-bold text-[#166534] uppercase tracking-widest">Perguntas Frequentes</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-6 border-b-2 border-[#166534]">
            <h2 className="text-2xl md:text-4xl font-black text-[#0f1a0f] uppercase tracking-tight leading-none text-balance">
              Respostas Diretas<br className="hidden md:block" /> sobre Apostas em Portugal
            </h2>
            <p className="text-sm text-[#6b7280] max-w-sm leading-relaxed md:text-right">
              Informacao objetiva para que tome decisoes informadas antes de se registar em qualquer plataforma.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
            {/* FAQ accordion */}
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "border-b border-[#e5e7eb] overflow-hidden",
                    index === 0 ? "border-t border-[#e5e7eb]" : "",
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex items-start justify-between text-left gap-4 group"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className={cn(
                        "font-bold text-sm md:text-[15px] leading-snug transition-colors",
                        openIndex === index ? "text-[#166534]" : "text-[#0f1a0f] group-hover:text-[#166534]",
                      )}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "w-6 h-6 flex-shrink-0 border flex items-center justify-center transition-colors mt-0.5",
                        openIndex === index
                          ? "border-[#166534] bg-[#166534]"
                          : "border-[#d1d5db] bg-white",
                      )}
                    >
                      <svg
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          openIndex === index ? "rotate-45 text-white" : "text-[#9ca3af]",
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === index ? "max-h-80 pb-5" : "max-h-0",
                    )}
                  >
                    <p className="text-sm text-[#374151] leading-relaxed pr-10">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-0">
              {/* Responsible gaming block */}
              <div className="border-2 border-[#166534] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#166534] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-sm text-[#0f1a0f] uppercase tracking-wide">Apoio ao Apostador</h3>
                </div>
                <p className="text-xs text-[#374151] leading-relaxed mb-4">
                  Se sentir que o jogo esta a afetar negativamente a sua vida ou a de quem lhe e proximo, procure ajuda.
                  A linha de apoio e gratuita e confidencial.
                </p>
                <div className="bg-[#f0f7f0] p-3 mb-4 text-center">
                  <p className="text-xs text-[#166534] font-bold uppercase tracking-wide mb-0.5">Linha de Apoio Gratuita</p>
                  <p className="text-xl font-black text-[#166534]">800 201 201</p>
                </div>
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs font-bold text-[#166534] hover:underline uppercase tracking-wide"
                >
                  jogoresponsavel.pt
                </a>
              </div>

              {/* Quick facts block */}
              <div className="border border-t-0 border-[#e5e7eb] p-6">
                <h3 className="font-black text-xs text-[#0f1a0f] uppercase tracking-widest mb-4">Factos Rapidos</h3>
                <ul className="space-y-3">
                  {[
                    "Idade minima legal: 18 anos",
                    "Regulador nacional: SRIJ",
                    "Apostas online legais desde 2015",
                    "Levantamentos ate 72 horas",
                  ].map((fact) => (
                    <li key={fact} className="flex items-center gap-2.5 text-xs text-[#374151]">
                      <div className="w-1.5 h-1.5 bg-[#166534] flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
