"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}>
      {/* Top notice bar */}
      <div className="bg-[#166534] text-white text-center py-1.5 px-4">
        <p className="text-[11px] font-semibold tracking-wide uppercase">
          Apenas operadores licenciados pelo SRIJ. Jogue com responsabilidade. Maiores de 18 anos.
        </p>
      </div>

      {/* Main header */}
      <div className="border-b-2 border-[#166534]">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="BestPTSitesDeApostas pagina inicial">
            {/* Sports icon mark */}
            <div className="w-9 h-9 bg-[#166534] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
              {/* Football / soccer ball SVG */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.4" fill="none" />
                {/* Pentagon center patch */}
                <polygon points="11,5.5 13.8,7.6 12.8,10.8 9.2,10.8 8.2,7.6" fill="white" opacity="0.9" />
                {/* Side patches */}
                <polygon points="3.5,8.5 6.5,8.5 7.5,11.5 5,13.5 2.5,11.5" fill="white" opacity="0.5" />
                <polygon points="18.5,8.5 15.5,8.5 14.5,11.5 17,13.5 19.5,11.5" fill="white" opacity="0.5" />
                <polygon points="6,16.5 8,13.5 12,13.5 14,16.5 11,18.5 8,16.5" fill="white" opacity="0.5" />
              </svg>
              {/* Diagonal speed line accent */}
              <div className="absolute bottom-0 right-0 w-3 h-[1.5px] bg-white/40 rotate-[-35deg] translate-y-[-4px] translate-x-[-1px]" />
            </div>
            {/* Text */}
            <span className="text-[13px] md:text-[16px] font-black tracking-[0.10em] uppercase leading-none">
              <span className="text-[#166534]">BESTPT</span>
              <span className="text-[#d1d5db] font-light mx-1.5">|</span>
              <span className="text-[#0f1a0f]">SITES DE APOSTAS</span>
            </span>
          </Link>

          {/* Right side: nav + badges */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5" aria-label="Navegacao principal">
              <Link
                href="/#ranking"
                className="text-sm font-semibold text-[#374151] hover:text-[#166534] transition-colors uppercase tracking-wide"
              >
                Ranking
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-[#374151] hover:text-[#166534] transition-colors uppercase tracking-wide"
              >
                Sobre
              </Link>
            </nav>

            <div className="w-px h-6 bg-[#e5e7eb] hidden md:block" />

            {/* SRIJ badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 border border-[#166534] bg-[#f0f7f0]">
              <Image src="/srij.svg" alt="SRIJ Logo" width={24} height={24} />

              <span className="hidden md:block text-[10px] md:text-[11px] font-bold text-[#166534] uppercase tracking-wide whitespace-nowrap">
                SRIJ Regulado
              </span>
            </div>

            {/* 18+ badge */}
            <div className="flex items-center justify-center w-9 h-9 border-2 border-[#b91c1c] bg-[#fef2f2] flex-shrink-0">
              <span className="text-xs font-black text-[#b91c1c]">18+</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
