"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const ease = [0.25, 0.46, 0.45, 0.94] as const

const projects = [
  {
    title: "Arbiter",
    category: "LLM Evaluation",
    tags: ["Python", "FastAPI", "PostgreSQL", "Async"],
    description: "Async evaluation platform for LLM outputs. Rule-based scoring, semantic checks, and LLM-as-judge pipelines.",
    href: "https://github.com/MohinVinayak/Arbiter",
    image: "/projects/arbiter.jpg",
    accent: "text-accent",
    bar: "bg-accent",
    barCss: "var(--accent)",
  },
  {
    title: "Code Dog",
    category: "Developer Tool",
    tags: ["TypeScript", "VS Code API", "Webview"],
    description: "VS Code extension on the marketplace. An animated companion tied to debug events with canvas rendering.",
    href: "https://github.com/MohinVinayak/Code-Dog",
    image: "/projects/code-dog.jpg",
    accent: "text-emerald-300",
    bar: "bg-emerald-400",
    barCss: "rgb(52 211 153)",
  },
  {
    title: "Loser Chess",
    category: "Game · AI",
    tags: ["Python", "Pygame", "Heuristics"],
    description: "A chess engine that plays to lose. Custom heuristics that invert standard board evaluation.",
    href: "https://github.com/MohinVinayak/LoserChess",
    image: "/projects/loser-chess.jpg",
    accent: "text-amber-300",
    bar: "bg-amber-400",
    barCss: "rgb(251 191 36)",
  },
]

export function Works() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" className="relative pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 border-t border-white/[0.07]">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-20 md:mb-28 flex items-end justify-between gap-8 border-b border-white/[0.07] pb-8"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm tracking-[0.3em] text-amber-300 tabular-nums">03</span>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">Work</h2>
        </div>
        <span className="hidden md:inline font-mono text-sm tracking-[0.3em] text-muted-foreground/40 uppercase">
          Built. Shipped. Live.
        </span>
      </motion.div>

      {/* Projects list */}
      <div onMouseLeave={() => setHovered(null)}>
        {projects.map((project, index) => {
          const isHovered = hovered === index
          const isDimmed = hovered !== null && hovered !== index

          return (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease }}
              onMouseEnter={() => setHovered(index)}
              className="group relative block border-t border-white/[0.07] last:border-b py-10 md:py-14 will-change-transform"
              style={{
                opacity: isDimmed ? 0.3 : 1,
                transition: "opacity 0.25s ease",
              }}
            >
              {/* Top bar — CSS scaleX via inline style, instant */}
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[1px] origin-left"
                style={{
                  background: project.barCss,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  opacity: isHovered ? 1 : 0,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              />

              <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline">
                {/* Index */}
                <div className="col-span-2 md:col-span-1">
                  <span
                    className={`font-mono text-sm tracking-widest tabular-nums transition-colors duration-200 ${
                      isHovered ? project.accent : "text-muted-foreground/60"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + category */}
                <div className="col-span-10 md:col-span-6">
                  <p
                    className={`font-mono text-sm tracking-[0.25em] uppercase mb-2 transition-colors duration-200 ${
                      isHovered ? project.accent : "text-muted-foreground/60"
                    }`}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight will-change-transform"
                    style={{
                      transform: isHovered ? "translateX(10px)" : "translateX(0)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="hidden md:block md:col-span-4 text-sm text-muted-foreground leading-relaxed text-pretty transition-opacity duration-200"
                  style={{ opacity: isHovered ? 0.6 : 1 }}
                >
                  {project.description}
                </p>

                {/* Arrow */}
                <div className="col-span-12 md:col-span-1 flex md:justify-end pt-2 md:pt-0">
                  <ArrowUpRight
                    className={`w-5 h-5 ml-auto md:ml-0 transition-all duration-200 ${
                      isHovered ? project.accent : "text-muted-foreground/70"
                    }`}
                    style={{
                      transform: isHovered ? "translate(3px, -3px)" : "translate(0,0)",
                      transition: "transform 0.2s ease, color 0.2s ease",
                    }}
                  />
                </div>

                {/* Tags */}
                <div className="col-span-12 md:col-start-2 md:col-span-10 flex gap-2 flex-wrap pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-sm tracking-wider px-4 py-1.5 border border-white/15 rounded-full text-muted-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover preview image — desktop only */}
              <div
                className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 w-72 lg:w-80 aspect-video rounded-lg overflow-hidden pointer-events-none"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.95)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  zIndex: 20,
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="320px"
                  loading="lazy"
                />
                {/* Gradient overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
