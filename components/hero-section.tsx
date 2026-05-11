"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen, setIsTopOffersModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="border-b-2 border-[#166534] bg-white">
      {/* Green top bar */}
      <div className="bg-[#166534] w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Ranking {currentYear}
            </span>
            {lastUpdated && (
              <span className="text-white/70 text-xs font-medium hidden sm:block">
                Atualizado em {lastUpdated}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="text-xs font-bold text-white border border-white/40 px-2 py-0.5 hover:bg-white/10 transition-colors"
            >
              18+
            </button>
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Publicidade
            </button>
          </div>
        </div>
      </div>

      {/* Main hero content — max 400px mobile, max 250px tablet/desktop */}
      <div
        className="max-h-[400px] md:max-h-[250px] overflow-hidden relative"
        style={{ backgroundImage: "url('/hero-sports.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-3 h-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">

            {/* Left column: heading + CTA */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="inline-block bg-[#166534] px-2.5 py-0.5 mb-2 self-start">
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  Comparador Independente
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight text-white text-balance mb-2">
                Melhores Sites de{" "}
                <span className="text-[#4ade80]">Apostas Desportivas</span>{" "}
                em Portugal
              </h1>

              <p className="text-sm text-white/80 leading-relaxed max-w-xl mb-3 hidden sm:block">
                Operadores licenciados pelo SRIJ avaliados por criterios objetivos: seguranca, bonus e odds.
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setIsTopOffersModalOpen?.(true)}
                  className="px-4 py-2 bg-[#166534] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#14532d] transition-colors"
                >
                  Ver Top Ofertas
                </button>
                <a
                  href="#ranking"
                  className="px-4 py-2 border-2 border-white text-white font-bold text-xs uppercase tracking-wide hover:bg-white/10 transition-colors"
                >
                  Ver Ranking
                </a>
              </div>
            </div>

            {/* Right column: trust indicators */}
            <div className="hidden md:flex flex-col gap-0 w-64 lg:w-72 shrink-0">
              <div className="border border-[#4ade80] bg-[#166534]/80 px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4ade80] shrink-0" />
                <p className="text-white font-bold text-xs uppercase tracking-wide">SRIJ Licenciado</p>
              </div>
              <div className="border border-t-0 border-white/30 bg-black/40 px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-white shrink-0" />
                <p className="text-white font-bold text-xs uppercase tracking-wide">Analise Independente</p>
              </div>
              <div className="border border-t-0 border-white/30 bg-black/40 px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-white shrink-0" />
                <p className="text-white font-bold text-xs uppercase tracking-wide">Bonus Verificados</p>
              </div>
              <div className="border border-t-0 border-white/30 bg-black/40 px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-white shrink-0" />
                <p className="text-white font-bold text-xs uppercase tracking-wide">Atualizado Regularmente</p>
              </div>
            </div>

            {/* Mobile: trust indicators as compact pills */}
            <div className="flex md:hidden gap-2 flex-wrap">
              {["SRIJ", "Independente", "Bonus OK", "Atualizado"].map((label) => (
                <span
                  key={label}
                  className="border border-white/60 text-white text-xs font-bold px-2 py-1 uppercase tracking-wide bg-black/30"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
