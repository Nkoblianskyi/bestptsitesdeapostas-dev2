import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Pagina Inicial", href: "/" },
  { label: "Ranking de Apostas", href: "/#ranking" },
  { label: "Sobre Nos", href: "/about" },
]

const legalLinks = [
  { label: "Politica de Privacidade", href: "/privacy-policy" },
  { label: "Politica de Cookies", href: "/cookie-policy" },
  { label: "Jogo Responsavel", href: "https://jogoresponsavel.pt", external: true },
]

const partners = [
  { href: "https://www.srij.turismodeportugal.pt/", src: "/srij-new.svg", alt: "SRIJ", darkBg: false },
  { href: "https://www.icad.pt/", src: "/icad.png", alt: "SICAD", darkBg: false },
  { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare", darkBg: false },
  { href: "https://www.gambleaware.org/", src: "/gamble-aware.webp", alt: "GambleAware", darkBg: false },
  { href: "https://www.jogoresponsavel.pt/", src: "/jogo-responsavel-new.png", alt: "Jogo Responsavel", darkBg: true },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0a120a] text-white">
      {/* Top green accent line */}
      <div className="h-1 bg-[#166534] w-full" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-0 border-b border-white/10">
          {/* Brand column */}
          <div className="py-10 md:py-14 pr-0 lg:pr-12 border-b md:border-b-0 md:border-r border-white/10">
            <Link href="/" className="flex items-center gap-2.5 mb-6" aria-label="Melhores Sites de Apostas Portugal">
              {/* Sports icon mark */}
              <div className="w-10 h-10 bg-[#166534] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.4" fill="none" />
                  <polygon points="11,5.5 13.8,7.6 12.8,10.8 9.2,10.8 8.2,7.6" fill="white" opacity="0.9" />
                  <polygon points="3.5,8.5 6.5,8.5 7.5,11.5 5,13.5 2.5,11.5" fill="white" opacity="0.5" />
                  <polygon points="18.5,8.5 15.5,8.5 14.5,11.5 17,13.5 19.5,11.5" fill="white" opacity="0.5" />
                  <polygon points="6,16.5 8,13.5 12,13.5 14,16.5 11,18.5 8,16.5" fill="white" opacity="0.5" />
                </svg>
                <div className="absolute bottom-0 right-0 w-3 h-[1.5px] bg-white/40 rotate-[-35deg] translate-y-[-4px] translate-x-[-1px]" />
              </div>
              {/* Text */}
              <div className="flex flex-col leading-none gap-1">
                <span className="text-[16px] font-black tracking-[0.10em] uppercase leading-none">
                  <span className="text-[#4ade80]">MELHORES</span>
                  <span className="text-white/20 font-light mx-1.5">|</span>
                  <span className="text-white">SITES DE APOSTAS PORTUGAL</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.18em] text-white/30 uppercase">
                  Comparador Independente
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md">
              Plataforma de comparacao independente de casas de apostas desportivas licenciadas pelo SRIJ.
              Avaliacoes imparciais baseadas em testes reais, sem influencia comercial dos operadores avaliados.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/30">
              <div className="w-4 h-4 border border-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-xs">info@melhoressitesdeapostasportugal.com</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="py-10 md:py-14 px-0 md:px-10 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-6">Navegacao</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-medium flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#166534] group-hover:w-2 transition-all duration-150" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="py-10 md:py-14 px-0 md:pl-10">
            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-white transition-colors font-medium flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#166534] group-hover:w-2 transition-all duration-150" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="py-8 border-b border-white/10">
          <p className="text-[10px] font-black text-white/25 uppercase tracking-widest text-center mb-6">
            Organizacoes de Jogo Responsavel
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
            {partners.map((partner) => (
              <a
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={partner.darkBg ? "p-2.5 bg-[#1a2a1a] hover:bg-[#243324] transition-colors" : "p-2.5 bg-white/95 hover:bg-white transition-colors"}
                aria-label={partner.alt}
              >
                <div className="relative w-[88px] h-[40px]">
                  <Image src={partner.src || "/placeholder.svg"} alt={partner.alt} fill className="object-contain" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="py-8 text-center space-y-4">
          <div className="inline-flex items-center gap-3 border border-[#b91c1c]/40 px-4 py-2">
            <div className="w-7 h-7 border-2 border-[#b91c1c] flex items-center justify-center">
              <span className="text-[10px] font-black text-[#b91c1c]">18+</span>
            </div>
            <span className="text-xs font-semibold text-white/60">Acesso exclusivo a maiores de 18 anos</span>
          </div>

          <p className="max-w-3xl mx-auto text-white/35 leading-relaxed text-xs">
            Melhores Sites de Apostas Portugal (melhoressitesdeapostasportugal.com) e um comparador independente de casas de apostas. Nao somos
            um operador de jogo. Todo o conteudo e destinado exclusivamente a maiores de 18 anos residentes em Portugal.
            Os links para operadores sao de natureza comercial. O jogo pode criar dependencia.
          </p>

          <p className="text-[#ef4444]/70 font-semibold text-xs uppercase tracking-wide">
            Aposte com responsabilidade. O jogo pode causar dependencia.
          </p>

          <p className="text-white/20 text-xs pt-4 border-t border-white/10 font-medium">
            &copy; {new Date().getFullYear()} Melhores Sites de Apostas Portugal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
