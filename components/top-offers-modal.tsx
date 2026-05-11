"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { bettingSites } from "@/data/bet-sites"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  const [topSite] = useState(bettingSites[0])
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

  if (!isOpen || !mounted || !topSite) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-9 h-9 bg-white border-2 border-[#166534] flex items-center justify-center hover:bg-[#f0f7f0] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-[#166534]" />
        </button>

        <div className="bg-white border-2 border-[#166534] overflow-hidden shadow-2xl">
          {/* Header strip */}
          <div className="bg-[#166534] px-5 py-4">
            <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-0.5">
              Oferta em Destaque
            </p>
            <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none">
              Nr 1 em Portugal · {new Date().getFullYear()}
            </h3>
          </div>

          <div className="p-6">
            {/* Logo */}
            <div className="flex justify-center mb-5">
              <div className="relative w-48 h-20 bg-[#0a120a] flex items-center justify-center p-3">
                <Image
                  src={topSite.logo || "/placeholder.svg"}
                  alt={topSite.name}
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute top-0 right-0 bg-[#166534] px-2 py-0.5">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">SRIJ</span>
                </div>
              </div>
            </div>

            {/* Score row */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="border border-[#166534] px-4 py-2 text-center">
                <div className="text-3xl font-black text-[#166534] leading-none">
                  {topSite.rating.toFixed(1)}
                </div>
                <div className="text-[10px] text-[#9ca3af] uppercase tracking-widest font-bold mt-0.5">de 10</div>
              </div>
              <div className="flex flex-col gap-1 text-xs text-[#374151] font-medium">
                <span>{topSite.reviews.toLocaleString("pt-PT")} avaliacoes</span>
                <span className="text-[#166534] font-bold">Classificacao Nr 1</span>
              </div>
            </div>

            {/* Bonus */}
            <div className="border border-[#166534] bg-[#f0f7f0] p-4 mb-5">
              <p className="text-[10px] font-bold text-[#166534] uppercase tracking-widest text-center mb-2">
                Bonus de Boas-Vindas Exclusivo
              </p>
              <p className="text-xl font-black text-[#166534] text-center leading-tight">{topSite.bonus}</p>
            </div>

            {/* CTA */}
            <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored">
              <button className="w-full h-13 py-4 bg-[#166534] hover:bg-[#14532d] text-white font-black text-sm uppercase tracking-widest transition-colors">
                Ativar Bonus Agora
              </button>
            </Link>

            <p className="text-[10px] text-center text-[#9ca3af] mt-4 leading-relaxed">
              Maiores de 18 anos. Termos e condicoes aplicam-se. Jogo responsavel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
