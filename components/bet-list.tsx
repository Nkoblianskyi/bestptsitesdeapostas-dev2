"use client"

import { BetCard } from "@/components/bet-card"
import { bettingSites } from "@/data/bet-sites"

export function BetList() {
  return (
    <section id="ranking" className="py-8 md:py-12 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div className="mb-6 pb-4 border-b-2 border-[#166534]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-[#0f1a0f] uppercase tracking-tight">
                  Casas de Apostas Licenciadas em Portugal
                </h2>
                <p className="text-sm text-[#6b7280] mt-1">
                  {bettingSites.length} operadores analisados e verificados pelo SRIJ
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-[#166534] border border-[#166534] px-3 py-1.5 bg-[#f0f7f0]">
                <span className="w-2 h-2 bg-[#166534] inline-block" />
                Ordenados por avaliacao
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {bettingSites.map((site, index) => (
              <BetCard key={site.name} site={site} rank={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
