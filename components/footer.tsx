"use client"

import { useEffect, useRef } from "react"

const links = [
  { label: "GitHub", href: "https://github.com/MohinVinayak" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohin-vinayak/" },
  { label: "Email", href: "mailto:mohinvinayak@gmail.com" },
]

export function Footer() {
  const timeRef = useRef<HTMLSpanElement>(null)
  const yearRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      if (timeRef.current) {
        const h = now.getHours().toString().padStart(2, "0")
        const m = now.getMinutes().toString().padStart(2, "0")
        const s = now.getSeconds().toString().padStart(2, "0")
        timeRef.current.textContent = `${h}:${m}:${s} IST`
      }
      if (yearRef.current) {
        yearRef.current.textContent = String(now.getFullYear())
      }
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="relative">
      {/* Wordmark */}
      <div className="px-6 md:px-12 pt-20 pb-12 border-t border-white/[0.07]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground/60 mb-4 uppercase">
              Signature
            </p>
            <h3 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
              MOHIN <span className="italic">VINAYAK</span>
            </h3>
            <p className="mt-5 font-mono text-xs tracking-[0.3em] text-muted-foreground/50 uppercase">
              Software · India
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground/60 uppercase">Status</p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-wider text-foreground">Open to Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="px-6 md:px-12 py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs tracking-widest text-muted-foreground/70">
            <span className="mr-2 uppercase">Local</span>
            <span ref={timeRef} className="text-foreground tabular-nums" />
          </div>

          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor-hover
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <p className="font-mono text-xs tracking-widest text-muted-foreground/70">
            © <span ref={yearRef}>2026</span> Mohin Vinayak
          </p>
        </div>
      </div>
    </footer>
  )
}
