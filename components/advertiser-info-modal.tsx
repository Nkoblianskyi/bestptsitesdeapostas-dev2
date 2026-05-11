"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white border-2 border-[#166534] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#166534] px-6 py-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">
                Informacao de Transparencia
              </p>
              <h2 className="text-lg font-black text-white uppercase tracking-tight leading-none">
                Divulgacao do Anunciante
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors flex-shrink-0"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            <p className="text-sm text-[#374151] leading-relaxed">
              <strong className="text-[#0f1a0f] font-black">BestPTSitesDeApostas</strong>{" "}
              (bestptsitesdeapostas.com) e um servico gratuito de comparacao de plataformas de apostas desportivas
              licenciadas em Portugal. O nosso objetivo e fornecer informacao objetiva e verificada a apostadores portugueses.
            </p>

            <div className="border-l-4 border-[#166534] pl-4 space-y-3">
              <div>
                <p className="text-xs font-black text-[#0f1a0f] uppercase tracking-wide mb-1">Modelo de Financiamento</p>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Recebemos uma comissao das marcas listadas quando um utilizador cria uma conta atraves dos nossos
                  links. Esta relacao comercial pode influenciar a visibilidade dos operadores no site, mas nao afeta
                  os criteiros objetivos da nossa avaliacao editorial.
                </p>
              </div>
            </div>

            <div className="bg-[#f0f7f0] border border-[#166534] p-4">
              <p className="text-xs font-black text-[#166534] uppercase tracking-wide mb-2">
                Compromisso com a Independencia
              </p>
              <p className="text-sm text-[#374151] leading-relaxed">
                Todos os operadores listados sao rigorosamente licenciados pelo SRIJ. As pontuacoes e classificacoes
                refletem exclusivamente a performance dos operadores nos nossos criteiros de avaliacao. Nenhum
                operador adquire uma classificacao mais elevada atraves de pagamento.
              </p>
            </div>

            <p className="text-xs text-[#9ca3af] leading-relaxed">
              As ofertas de bonus e condicoes comerciais publicadas estao sujeitas a alteracoes sem aviso previo.
              Recomendamos a verificacao dos termos atuais diretamente no site do operador antes de qualquer registo.
            </p>

            <button
              onClick={onClose}
              className="w-full py-4 bg-[#166534] hover:bg-[#14532d] text-white font-black uppercase tracking-widest text-sm transition-colors"
            >
              Compreendido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
