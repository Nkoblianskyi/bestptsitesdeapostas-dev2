import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Melhores Sites de Apostas Portugal | Melhores Casas de Apostas em Portugal 2026",
    template: "%s | Melhores Sites de Apostas Portugal",
  },
  description:
    "Comparador independente das melhores casas de apostas desportivas licenciadas pelo SRIJ em Portugal. Analises detalhadas, bonus verificados e classificacoes atualizadas em 2026.",
  keywords: [
    "melhores casas de apostas portugal",
    "casas de apostas online portugal",
    "apostas desportivas portugal",
    "sites de apostas licenciados srij",
    "bonus apostas portugal",
    "comparador apostas portugal",
    "apostas desportivas legais portugal",
    "melhores sites de apostas 2026",
    "ranking casas de apostas",
    "apostas online portugal srij",
    "betano portugal",
    "bet365 portugal",
    "solverde apostas",
    "casino apostas portugal",
    "odds apostas portugal",
    "apostas futebol portugal",
    "bonus boas vindas apostas",
    "freebets portugal",
    "apostas ao vivo portugal",
    "casas de apostas seguras portugal",
  ],
  authors: [{ name: "Melhores Sites de Apostas Portugal", url: "https://melhoressitesdeapostasportugal.com" }],
  creator: "Melhores Sites de Apostas Portugal",
  publisher: "Melhores Sites de Apostas Portugal",
  metadataBase: new URL("https://melhoressitesdeapostasportugal.com"),
  alternates: {
    canonical: "https://melhoressitesdeapostasportugal.com",
    languages: {
      "pt-PT": "https://melhoressitesdeapostasportugal.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Melhores Sites de Apostas Portugal | Top Casas de Apostas Portugal 2026",
    description:
      "Encontre as melhores casas de apostas licenciadas pelo SRIJ em Portugal. Comparacoes imparciais, bonus exclusivos e guias completos para apostadores portugueses.",
    siteName: "Melhores Sites de Apostas Portugal",
    locale: "pt_PT",
    type: "website",
    url: "https://melhoressitesdeapostasportugal.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Melhores Sites de Apostas Portugal - Comparador de Casas de Apostas em Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Sites de Apostas Portugal | Melhores Apostas Online em Portugal",
    description:
      "Comparamos as melhores casas de apostas desportivas licenciadas pelo SRIJ. Bonus verificados, odds competitivas e servico de qualidade.",
    images: ["/og-image.jpg"],
  },
  category: "Sports Betting Comparison",
  classification: "Comparison Website",
  verification: {
    google: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} antialiased bg-background`}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#166534" />
        <meta name="author" content="Melhores Sites de Apostas Portugal" />
        <meta property="og:site_name" content="Melhores Sites de Apostas Portugal" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />
        <meta
          name="disclaimer"
          content="Site de comparacao independente. Nao somos uma casa de apostas. Links para sites licenciados pelo SRIJ."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
