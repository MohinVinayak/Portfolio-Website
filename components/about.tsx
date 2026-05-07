"use client"

import { motion } from "framer-motion"

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-32 md:py-44">
      {/* Section header — editorial */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-20 md:mb-28 flex items-end justify-between gap-8 border-b border-white/[0.07] pb-8"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm tracking-[0.3em] text-accent tabular-nums">01</span>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">About</h2>
        </div>
        <span className="hidden md:inline font-mono text-sm tracking-[0.3em] text-muted-foreground/40 uppercase">
          01 / 05
        </span>
      </motion.div>

      {/* Two-column statement */}
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="md:col-span-7 font-sans text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-balance"
        >
          I build systems{" "}
          <span
            className="italic"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.5)",
              color: "transparent",
            }}
          >
            that hold.
          </span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="md:col-span-5 md:pt-4 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            ENC undergrad at <span className="text-foreground">Thapar Institute</span>. I write production
            code in Python, C++, and TypeScript.
          </p>
          <p>
            Three projects live and open source — an async LLM evaluation platform, a published VS Code extension, and a
            chess engine that plays to lose.
          </p>
          <p className="text-foreground">I read papers when needed. I ship the rest of the time.</p>

          {/* Meta grid */}
          <div className="pt-2 grid grid-cols-3 gap-6 border-t border-white/10 mt-10">
            <div className="pt-5">
              <p className="font-mono text-sm tracking-[0.25em] text-muted-foreground/60 mb-2 uppercase">Focus</p>
              <p className="font-mono text-sm text-foreground">Software</p>
            </div>
            <div className="pt-5">
              <p className="font-mono text-sm tracking-[0.25em] text-muted-foreground/60 mb-2 uppercase">Stack</p>
              <p className="font-mono text-sm text-foreground">Polyglot</p>
            </div>
            <div className="pt-5">
              <p className="font-mono text-sm tracking-[0.25em] text-muted-foreground/60 mb-2 uppercase">Based</p>
              <p className="font-mono text-sm text-foreground">India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
