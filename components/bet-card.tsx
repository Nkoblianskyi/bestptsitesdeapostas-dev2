"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BettingSite } from "@/data/bet-sites"

interface BetCardProps {
  site: BettingSite
  rank: number
}

export function BetCard({ site, rank }: BetCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "Melhor Avaliado"
      case 2:
        return "Top Selecao"
      case 3:
        return "Alta Classificacao"
      default:
        return "Verificado SRIJ"
    }
  }

  const renderStars = (rating: number, size = 18) => {
    const starRating = Math.round((rating / 2) * 5) / 5
    const stars = []

    for (let i = 0; i < 5; i++) {
      const fill = Math.min(1, Math.max(0, starRating - i))
      const fillPct = Math.round(fill * 100)
      const id = `star-${site.name}-${i}`

      stars.push(
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", flexShrink: 0 }}
        >
          <defs>
            <clipPath id={id}>
              <rect x="0" y="0" width={fillPct === 100 ? 14 : (14 * fillPct) / 100} height="14" />
            </clipPath>
          </defs>
          <path
            d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
            fill="#d1d5db"
          />
          {fillPct > 0 && (
            <path
              d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
              fill="#d97706"
              clipPath={`url(#${id})`}
            />
          )}
        </svg>,
      )
    }
    return stars
  }

  const isTop = rank === 1

  return (
    <div
      className={cn(
        "group relative bg-white overflow-hidden transition-all duration-150",
        isTop
          ? "border-2 border-[#166534] shadow-sm"
          : "border border-[#d1d5db] hover:border-[#166534]",
      )}
    >
      {/* Top label strip */}
      <div
        className={cn(
          "flex items-center gap-0 text-xs font-bold",
          isTop ? "bg-[#166534] text-white" : "bg-[#f4f4f4] text-[#374151]",
        )}
      >
        <span className={cn("px-3 py-1.5 border-r font-black", isTop ? "border-white/20" : "border-[#d1d5db]")}>
          #{rank}
        </span>
        <span className="px-3 py-1.5 uppercase tracking-wide text-[11px]">{getRankLabel(rank)}</span>
        {isTop && (
          <span className="ml-auto px-3 py-1.5 border-l border-white/20 text-[10px] font-semibold opacity-80">
            SRIJ Licenciado
          </span>
        )}
      </div>

      <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-0 items-stretch">
          {/* Logo */}
          <div className={cn("col-span-3 flex items-center justify-center p-5 border-r border-[#d1d5db]", site.darkLogo ? "bg-[#0f1a0f]" : "bg-[#f4f4f4]")}>
            <div className="w-full bg-black max-w-[180px] h-20 flex items-center justify-center">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={180}
                height={80}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Bonus */}
          <div className="col-span-4 flex flex-col items-center justify-center p-5 border-r border-[#d1d5db] text-center">
            <span className="text-[10px] font-semibold text-[#6b7280] uppercase tracking-widest mb-1.5">
              Bonus de Boas-Vindas
            </span>
            <p className={cn("text-xl font-black leading-tight", isTop ? "text-[#166534]" : "text-[#0f1a0f]")}>
              {site.bonus}
            </p>
          </div>

          {/* Rating */}
          <div className="col-span-3 flex flex-col items-center justify-center p-5 border-r border-[#d1d5db] text-center">
            <div className="flex justify-center gap-[2px] mb-1.5">{renderStars(site.rating)}</div>
            <div className="flex items-baseline gap-1">
              <span className={cn("text-3xl font-black", isTop ? "text-[#166534]" : "text-[#0f1a0f]")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-sm text-[#6b7280]">/10</span>
            </div>
            <p className="text-[10px] text-[#9ca3af] mt-1">({formatReviews(site.reviews)} avaliacoes)</p>
          </div>

          {/* CTA */}
          <div className="col-span-2 flex flex-col items-center justify-center p-5 gap-2.5">
            <Button
              className="w-full font-bold transition-all rounded-none text-sm bg-[#d97706] hover:bg-[#b45309] text-white"
            >
              Obter Bonus
            </Button>
            <p className="text-[10px] text-[#6b7280] text-center">Verificado SRIJ</p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden p-4">
          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <div className="flex justify-center">
              <div className={cn("w-full max-w-[140px] bg-black h-16 flex items-center justify-center p-2", site.darkLogo ? "bg-[#0f1a0f]" : "bg-[#f4f4f4]")}>
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={140}
                  height={64}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center border-l border-r border-[#d1d5db] px-2">
              <span className="text-[9px] font-semibold text-[#6b7280] uppercase tracking-widest mb-1">
                Bonus
              </span>
              <p className={cn("text-base font-black leading-tight", isTop ? "text-[#166534]" : "text-[#0f1a0f]")}>
                {site.bonus}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-[2px] mb-1">{renderStars(site.rating)}</div>
              <div className="flex items-baseline gap-1">
                <span className={cn("text-2xl font-black", isTop ? "text-[#166534]" : "text-[#0f1a0f]")}>
                  {site.rating.toFixed(1)}
                </span>
                <span className="text-xs text-[#6b7280]">/10</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              className="flex-1 max-w-xs font-bold rounded-none bg-[#d97706] hover:bg-[#b45309] text-white"
            >
              Obter Bonus
            </Button>
            <p className="text-xs text-[#6b7280]">Verificado SRIJ</p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={cn("w-28 h-16 shrink-0 flex bg-black items-center justify-center p-2", site.darkLogo ? "bg-[#0f1a0f]" : "bg-[#f4f4f4]")}>
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={112}
                height={64}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[9px] font-semibold text-[#6b7280] uppercase block mb-0.5">Bonus</span>
              <p className={cn("text-lg font-black leading-tight", isTop ? "text-[#166534]" : "text-[#0f1a0f]")}>
                {site.bonus}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className={cn("text-xl font-black", isTop ? "text-[#166534]" : "text-[#0f1a0f]")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-xs text-[#6b7280]">/10</span>
            </div>
            <div className="flex gap-[2px]">{renderStars(site.rating)}</div>
            <Button
              size="sm"
              className="font-bold text-xs rounded-none bg-[#d97706] hover:bg-[#b45309] text-white"
            >
              Obter Bonus
            </Button>
          </div>
        </div>
      </Link>

      {/* Disclaimer strip */}
      <div className="px-4 py-1.5 border-t border-[#f0f0f0] bg-[#f9fafb]">
        <p className="text-[10px] text-center text-[#9ca3af]">
          +18 | Jogo Responsavel |{" "}
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-[#166534] hover:underline"
          >
            jogoresponsavel.pt
          </a>
          {" "}| Aplicam-se T&C
        </p>
      </div>
    </div>
  )
}
