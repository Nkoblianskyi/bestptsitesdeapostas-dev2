"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-[#0a120a] border-t-2 border-[#166534] shadow-2xl">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            {/* Icon */}
            <div className="w-9 h-9 bg-[#166534] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-white uppercase tracking-wide mb-1">
                Utilizacao de Cookies
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                Este site utiliza cookies para melhorar a experiencia de navegacao e analisar o trafego. Consulte a nossa{" "}
                <Link href="/cookie-policy" className="text-[#4ade80] hover:text-white font-semibold transition-colors">
                  Politica de Cookies
                </Link>{" "}
                para saber mais. Pode alterar as suas preferencias a qualquer momento.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={declineAll}
                className="flex-1 sm:flex-none px-5 py-2.5 border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-xs font-bold uppercase tracking-wide transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-black uppercase tracking-wide transition-colors"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
