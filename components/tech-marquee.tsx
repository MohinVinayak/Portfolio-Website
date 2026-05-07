"use client"

import { motion } from "framer-motion"

const ease = [0.25, 0.46, 0.45, 0.94] as const

const languages = ["PYTHON", "C++", "TYPESCRIPT", "C", "BASH", "SQL"]
const stack = ["FASTAPI", "REACT", "NODE.JS", "POSTGRESQL", "DOCKER", "GIT", "LINUX"]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicated = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicated.map((item, index) => (
          <span
            key={index}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default transition-all duration-200"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.28)",
              color: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white"
              e.currentTarget.style.WebkitTextStroke = "none"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent"
              e.currentTarget.style.WebkitTextStroke = "1px rgba(255,255,255,0.28)"
            }}
          >
            {item}
            <span className="mx-8 text-white/15">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section id="skills" className="relative py-32 md:py-40 overflow-hidden border-t border-white/[0.07]">
      {/* Section header — editorial */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="px-6 md:px-12 mb-20 flex items-end justify-between gap-8 border-b border-white/[0.07] pb-8"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm tracking-[0.3em] text-sky-300 tabular-nums">04</span>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">Arsenal</h2>
        </div>
        <span className="hidden md:inline font-mono text-sm tracking-[0.3em] text-muted-foreground/40 uppercase">
          Daily Drivers.
        </span>
      </motion.div>

      {/* Row label */}
      <div className="px-6 md:px-12 mb-3 flex items-center gap-4">
        <span className="font-mono text-sm tracking-[0.3em] text-sky-300/80 uppercase">Languages</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <MarqueeRow items={languages} direction="left" />

      <div className="px-6 md:px-12 mt-8 mb-3 flex items-center gap-4">
        <span className="font-mono text-sm tracking-[0.3em] text-sky-300/80 uppercase">Frameworks · Tools</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <MarqueeRow items={stack} direction="right" />
    </section>
  )
}
