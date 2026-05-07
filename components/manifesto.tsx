"use client"

import { motion } from "framer-motion"

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Manifesto() {
  return (
    <section className="relative px-6 md:px-12 py-28 md:py-36 border-t border-white/[0.07]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="max-w-5xl"
      >
        <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground/60 uppercase mb-10">
          ✱ On process
        </p>
        <blockquote className="font-sans text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-balance">
          With great access{" "}
          <span
            className="italic"
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
              color: "transparent",
            }}
          >
            comes great discipline.
          </span>
        </blockquote>
        <p className="mt-10 font-mono text-sm tracking-[0.25em] text-muted-foreground/50 uppercase">
          — Pinned above the desk
        </p>
      </motion.div>
    </section>
  )
}
