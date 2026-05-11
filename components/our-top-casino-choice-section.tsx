"use client"

import { useState } from "react"
import { bettingSites } from "@/data/bet-sites"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const highlights = [
  "Licenca SRIJ verificada e ativa",
  "Odds competitivas em mercados portugueses",
  "Bonus com requisitos claros e atingiveis",
  "Levantamentos processados em menos de 24 horas",
  "Suporte em portugues disponivel todos os dias",
]

export function OurTopCasinoChoiceSection() {
  const [topSite] = useState(bettingSites[0])

  if (!topSite) return null

  const starRating = Math.round(((topSite.rating / 2) * 5) / 0.5) * 0.5

  return (
    <section className="py-10 md:py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-[#166534]" />
            <span className="text-xs font-bold text-[#166534] uppercase tracking-widest">Escolha do Editor</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-6 border-b-2 border-[#166534]">
            <h2 className="text-2xl md:text-4xl font-black text-[#0f1a0f] uppercase tracking-tight leading-none text-balance">
              O Operador com Maior<br className="hidden md:block" /> Pontuacao em 2026
            </h2>
            <p className="text-sm text-[#6b7280] max-w-sm leading-relaxed md:text-right">
              Este operador obteve a classificacao mais alta em todos os criterios da nossa avaliacao independente.
            </p>
          </div>

          {/* Main featured card */}
          <div className="bg-white border-2 border-[#166534] overflow-hidden">
            {/* Top label bar */}
            <div className="bg-[#166534] px-6 py-3 flex items-center justify-between">
              <span className="text-xs font-black text-white uppercase tracking-widest">
                Classificacao Nr 1 Independente
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/70" />
                <div className="w-2 h-2 bg-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-[280px_1px_1fr] gap-0">
              {/* Left panel: logo + score */}
              <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 border-[#e5e7eb]">
                <div className="w-52 h-28 bg-[#0f1a0f] flex items-center justify-center p-4 mb-6">
                  <Image
                    src={topSite.logo || "/placeholder.svg"}
                    alt={topSite.name}
                    width={180}
                    height={80}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* Score */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl font-black text-[#166534] leading-none">
                    {topSite.rating.toFixed(1)}
                  </span>
                  <span className="text-xl text-[#9ca3af] font-medium">/10</span>
                </div>
                <p className="text-xs text-[#9ca3af] mb-4">
                  {topSite.reviews.toLocaleString("pt-PT")} avaliacoes verificadas
                </p>

                {/* Star row */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const fill = Math.min(1, Math.max(0, starRating - i))
                    const fillPct = Math.round(fill * 100)
                    const id = `top-star-${i}`
                    return (
                      <svg key={i} width="20" height="20" viewBox="0 0 14 14" fill="none">
                        <defs>
                          <clipPath id={id}>
                            <rect x="0" y="0" width={fillPct === 100 ? 14 : (14 * fillPct) / 100} height="14" />
                          </clipPath>
                        </defs>
                        <path
                          d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
                          fill="#e5e7eb"
                        />
                        {fillPct > 0 && (
                          <path
                            d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
                            fill="#166534"
                            clipPath={`url(#${id})`}
                          />
                        )}
                      </svg>
                    )
                  })}
                </div>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden md:block bg-[#e5e7eb]" />

              {/* Right panel: highlights + bonus + CTA */}
              <div className="p-8">
                {/* Highlights list */}
                <ul className="space-y-3 mb-7">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#166534] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[#374151]">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bonus box */}
                <div className="border border-[#166534] bg-[#f0f7f0] p-5 mb-5">
                  <p className="text-[10px] font-bold text-[#166534] uppercase tracking-widest mb-2 text-center">
                    Oferta de Boas-Vindas para Novos Utilizadores
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-[#166534] text-center leading-tight">
                    {topSite.bonus}
                  </p>
                </div>

                {/* CTA */}
                <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored">
                  <Button
                    size="lg"
                    className="w-full bg-[#166534] hover:bg-[#14532d] text-white font-black text-base h-14 rounded-none tracking-wide transition-colors"
                  >
                    Abrir Conta e Ativar Bonus
                  </Button>
                </Link>
                <p className="text-[11px] text-[#9ca3af] mt-3 text-center leading-relaxed">
                  Maiores de 18 anos. Termos e condicoes aplicam-se. Jogo responsavel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
