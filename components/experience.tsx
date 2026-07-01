"use client"

import { motion } from "framer-motion"

const ease = [0.25, 0.46, 0.45, 0.94] as const

const roles = [
  {
    company: "Kosh (YC W20)",
    role: "Software Engineer Intern",
    when: "Jun 2026 — Present",
    location: "Gurugram, Haryana",
    bullets: [
      "Built a distributed bank statement extraction engine (Celery, Redis, Docker) that reduced LLM inference costs by ~90% through a local-first Docling pipeline with intelligent Gemini fallback.",
    ],
    stack: ["Celery", "Redis", "Docker", "Docling", "Gemini"],
  },
  {
    company: "CSI Computech India",
    role: "Software Engineer Intern",
    when: "Jun 2025 — Jul 2025",
    location: "Navi Mumbai",
    bullets: [
      "Architected and modernized a modular, class-based Python Access Management System for enterprise-scale environments.",
      "Implemented dual authentication and configurable key modes, drastically reducing deployment latency.",
      "Managed hardware-software integration, debugging via PuTTY and remote Linux terminals.",
    ],
    stack: ["Python", "Linux", "Git", "SQLite"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-32 md:py-44 border-t border-white/[0.07]">
      {/* Section header — editorial */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-20 md:mb-28 flex items-end justify-between gap-8 border-b border-white/[0.07] pb-8"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm tracking-[0.3em] text-emerald-300 tabular-nums">02</span>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">Experience</h2>
        </div>
        <span className="hidden md:inline font-mono text-sm tracking-[0.3em] text-muted-foreground/40 uppercase">
          02 / 05
        </span>
      </motion.div>

      {/* Roles */}
      <div className="space-y-20 md:space-y-32 divide-y divide-white/[0.07]">
        {roles.map((entry, index) => (
          <motion.article
            key={entry.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: index * 0.1 }}
            className="grid md:grid-cols-12 gap-10 md:gap-16 first:pt-0 pt-20 md:pt-32"
          >
            {/* Left meta */}
            <div className="md:col-span-4 space-y-5">
              <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground/60 uppercase">{entry.when}</p>
              <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground/60 uppercase">{entry.location}</p>
              <span className="inline-flex items-center gap-2 font-mono text-sm tracking-[0.25em] uppercase text-emerald-300/90">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {entry.role}
              </span>
            </div>

            {/* Right content */}
            <div className="md:col-span-8 space-y-8">
              <h3 className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
                {entry.company.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="italic">{entry.company.split(" ").slice(-1)}</span>
              </h3>
              <ul className="space-y-5">
                {entry.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
                    className="flex gap-5 text-muted-foreground leading-relaxed"
                  >
                    <span className="font-mono text-sm text-emerald-300/90 pt-1 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg">{bullet}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex gap-2 flex-wrap pt-4">
                {entry.stack.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-sm tracking-wider px-4 py-1.5 border border-white/15 rounded-full text-muted-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
