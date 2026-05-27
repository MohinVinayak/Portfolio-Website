"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { SentientSphere } from "./sentient-sphere"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const sphereScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const ease = [0.25, 0.46, 0.45, 0.94] as const

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505]"
      style={{ minHeight: "100dvh" }}
    >
      {/* Parallax sphere */}
      <motion.div style={{ y: sphereY, scale: sphereScale }} className="absolute inset-0">
        <SentientSphere />
      </motion.div>

      {/* Subtle web watermark */}
      <div className="absolute inset-0 spider-web-corner opacity-[0.04] pointer-events-none mix-blend-screen" />

      {/* Top status strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease }}
        className="absolute top-0 inset-x-0 z-20 px-6 md:px-12 pt-24 md:pt-28 flex items-center justify-between font-mono text-xs tracking-[0.3em] text-muted-foreground/60 uppercase pointer-events-none"
      >
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          Portfolio · MMXXVI
        </span>
        <span className="hidden md:inline">India · IST</span>
      </motion.div>

      {/* Main content — absolutely centered so it's immune to viewport height changes */}
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="font-mono text-xs md:text-sm tracking-[0.35em] text-muted-foreground/80 mb-8 md:mb-10 uppercase"
        >
          <span className="text-accent">— </span> Software Engineer · Portfolio
        </motion.p>

        {/* Wordmark */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease }}
            className="font-sans font-light tracking-[-0.02em] leading-[0.85]"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            MOHIN
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease }}
            className="font-sans font-light italic tracking-[-0.02em] leading-[0.85] mt-1"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.55)",
              color: "transparent",
            }}
          >
            VINAYAK
          </motion.h2>
        </div>

        {/* Tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.18em] text-muted-foreground uppercase max-w-md leading-relaxed">
            ENC undergrad at Thapar.
            <br />
            <span className="text-foreground">Building software that ships.</span>
          </p>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground/60 uppercase hidden md:inline">
              03 Projects
              <span className="mx-2 text-white/20">/</span>
              01 Internship
            </span>
            <a
              href="#projects"
              data-cursor-hover
              className="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>See The Work</span>
              <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-8 w-px overflow-hidden bg-white/10">
            <motion.div
              animate={{ y: [-32, 32] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-white/60 to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
