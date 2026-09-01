"use client"

import { Fragment } from "react"
import { motion } from "framer-motion"

const ease = [0.25, 0.46, 0.45, 0.94] as const

// Subtle per-technology color accents
const tagColors: Record<string, { bg: string; border: string; text: string }> = {
  // Kosh stack
  Celery:  { bg: "rgba(134,239,172,0.06)",  border: "rgba(134,239,172,0.25)", text: "rgba(134,239,172,0.85)" },
  Redis:   { bg: "rgba(248,113,113,0.07)",  border: "rgba(248,113,113,0.28)", text: "rgba(248,113,113,0.85)" },
  Docker:  { bg: "rgba(96,165,250,0.07)",   border: "rgba(96,165,250,0.28)",  text: "rgba(96,165,250,0.85)"  },
  Docling: { bg: "rgba(192,132,252,0.07)",  border: "rgba(192,132,252,0.25)", text: "rgba(192,132,252,0.85)" },
  Gemini:  { bg: "rgba(99,202,183,0.07)",   border: "rgba(99,202,183,0.25)",  text: "rgba(99,202,183,0.85)"  },
  // CSI stack
  Python:  { bg: "rgba(250,204,21,0.06)",   border: "rgba(250,204,21,0.25)",  text: "rgba(250,204,21,0.80)"  },
  Linux:   { bg: "rgba(251,146,60,0.07)",   border: "rgba(251,146,60,0.28)",  text: "rgba(251,146,60,0.85)"  },
  Git:     { bg: "rgba(249,115,22,0.07)",   border: "rgba(249,115,22,0.28)",  text: "rgba(249,115,22,0.85)"  },
  SQLite:  { bg: "rgba(56,189,248,0.07)",   border: "rgba(56,189,248,0.25)",  text: "rgba(56,189,248,0.85)"  },
  ARM:     { bg: "rgba(148,163,184,0.07)",  border: "rgba(148,163,184,0.25)", text: "rgba(148,163,184,0.80)" },
}

const roles = [
  {
    company: "Kosh ",
    companyItalic: "(YC W20)",
    role: "Software Engineer Intern",
    when: "Jun 2026 — Jul 2026",
    location: "Gurugram, Haryana, India",
    bullets: [
      "Built a distributed bank statement extraction and analysis engine using Python, Celery, Redis and Docker, reducing LLM inference costs by ~81% through a local-first document processing pipeline with automated transaction validation.",
      "Within the pipeline, implemented a cascading extraction workflow using Docling, pdfplumber as a local fallback, and Gemini as a last-resort fallback, improving extraction reliability while limiting paid LLM usage and producing structured transaction data for downstream analytics.",
    ],
    stack: ["Python", "Celery", "Redis", "Docker", "Docling", "Gemini"],
  },
  {
    company: "CSI ",
    companyItalic: "Computech India Pvt. Ltd.",
    role: "Software Engineer Intern",
    when: "Jun 2025 — Jul 2025",
    location: "Navi Mumbai, Maharashtra, India",
    bullets: [
      "Redesigned the Access Management System (AMS) deployed at Reliance and Yes Bank into a modular architecture, enabling configurable key-management and authentication workflows.",
      "Introduced dual authentication for sensitive activities and configurable Fixed/Free Key modes, while strengthening security-event logging and resolving input-state and system-flow issues to improve security, reliability and user experience.",
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
      <div className="flex flex-col">
        {roles.map((entry, index) => (
          <Fragment key={entry.company}>
            {index > 0 && (
              <div className="border-t border-white/[0.07] my-20 md:my-28" />
            )}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: index * 0.1 }}
              className="grid md:grid-cols-12 gap-10 md:gap-16"
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
                {entry.company}
                <span className="italic">{entry.companyItalic}</span>
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
                {entry.stack.map((tag) => {
                  const c = tagColors[tag]
                  return (
                    <span
                      key={tag}
                      className="font-mono text-sm tracking-wider px-4 py-1.5 rounded-full transition-colors"
                      style={c ? {
                        backgroundColor: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.text,
                      } : {
                        backgroundColor: "transparent",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>
            </motion.article>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
