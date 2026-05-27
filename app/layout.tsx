import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Mohin Vinayak | Systems & Software",
  description:
    "ENC student at TIET. Engineering high-performance systems, embedded Linux BSPs, and production-ready developer tools.",
  keywords: ["Mohin Vinayak", "software engineer", "portfolio", "Thapar", "TIET", "Python", "TypeScript", "C++", "full stack"],
  authors: [{ name: "Mohin Vinayak", url: "https://github.com/MohinVinayak" }],
  openGraph: {
    type: "website",
    title: "Mohin Vinayak | Systems & Software",
    description: "ENC undergrad at Thapar. Building software that ships — async LLM evaluation, VS Code extensions, and chess engines.",
    siteName: "Mohin Vinayak",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohin Vinayak | Systems & Software",
    description: "ENC undergrad at Thapar. Building software that ships.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
