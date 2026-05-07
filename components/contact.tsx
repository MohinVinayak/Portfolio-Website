"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react"

const ease = [0.25, 0.46, 0.45, 0.94] as const

const channels = [
  {
    label: "Email",
    href: "mailto:mohinvinayak@gmail.com",
    handle: "mohinvinayak@gmail.com",
    Icon: Mail,
    color: "group-hover:text-accent",
    iconColor: "group-hover:text-accent",
  },
  {
    label: "GitHub",
    href: "https://github.com/MohinVinayak",
    handle: "@MohinVinayak",
    Icon: Github,
    color: "group-hover:text-emerald-300",
    iconColor: "group-hover:text-emerald-300",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohin-vinayak/",
    handle: "in/mohin-vinayak",
    Icon: Linkedin,
    color: "group-hover:text-sky-300",
    iconColor: "group-hover:text-sky-300",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/19sJLwb6cDnT50vNlW5flyxq88GvvwXdD/view?usp=sharing",
    handle: "PDF · Drive",
    Icon: FileText,
    color: "group-hover:text-amber-300",
    iconColor: "group-hover:text-amber-300",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-32 md:py-44 border-t border-white/[0.07]">
      {/* Section header — editorial */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-20 md:mb-24 flex items-end justify-between gap-8 border-b border-white/[0.07] pb-8"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm tracking-[0.3em] text-accent tabular-nums">05</span>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">Contact</h2>
        </div>
        <span className="hidden md:inline font-mono text-sm tracking-[0.3em] text-muted-foreground/40 uppercase">
          05 / 05
        </span>
      </motion.div>

      {/* Statement */}
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] text-balance mb-6 max-w-5xl"
      >
        Open to internships and full-time roles in{" "}
        <span
          className="italic"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
            color: "transparent",
          }}
        >
          software engineering.
        </span>
      </motion.h3>

      {/* Sub-statement */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase mb-16 md:mb-20 flex items-center gap-3"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Internships · Full-time · Side quests · Replies within 24 hours
      </motion.p>

      {/* Channel grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
        {channels.map(({ label, href, handle, Icon, color }, index) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            data-cursor-hover
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.06, ease }}
            className={`group relative flex items-center justify-between gap-6 py-8 md:py-10 px-2 md:px-6 border-b border-white/10 ${
              index % 2 === 0 ? "md:border-r" : ""
            } hover:bg-white/[0.02] transition-colors duration-300`}
          >
            <div className="flex items-center gap-5 md:gap-8 min-w-0">
              <Icon className={`w-5 h-5 md:w-6 md:h-6 text-muted-foreground/50 transition-colors duration-300 shrink-0 ${color}`} />
              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-mono text-sm tracking-[0.25em] text-muted-foreground/60 uppercase">{label}</span>
                <span className={`font-sans text-xl md:text-3xl lg:text-4xl font-light tracking-tight truncate transition-colors duration-300 ${color}`}>
                  {handle}
                </span>
              </div>
            </div>
            <ArrowUpRight
              className={`w-6 h-6 md:w-7 md:h-7 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ${color}`}
            />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
