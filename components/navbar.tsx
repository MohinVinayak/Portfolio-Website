"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // State for the animated sliding cursor
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/20 backdrop-blur-2xl border-b border-white/[0.04]" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-12">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="group flex items-center gap-2.5"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-white">MV</span>
            <span className="w-1 h-1 rounded-full bg-white group-hover:scale-[2.5] transition-transform duration-500 ease-out" />
          </a>

          {/* Desktop nav with Animated Sliding Pill */}
          <ul 
            className="hidden md:flex relative items-center w-fit rounded-full border border-white/10 bg-black/40 backdrop-blur-md p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
          >
            {navLinks.map((link) => (
              <Tab 
                key={link.label} 
                setPosition={setPosition}
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </Tab>
            ))}
            <Cursor position={position} />
          </ul>

          {/* Status - Pill shape for consistency */}
          <div className="hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase">
              Open to Work
            </span>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-white origin-center transition-transform"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-px bg-white transition-opacity"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-white origin-center transition-transform"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, ease: "easeOut" }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-4xl font-sans tracking-tight text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Tab Component - Now a motion.li for the tap micro-interaction
const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  return (
    <motion.li
      ref={ref}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 font-mono text-xs tracking-[0.2em] uppercase text-white mix-blend-difference"
    >
      {children}
    </motion.li>
  );
};

// Cursor Component - Upgraded Physics and Subtle Glow
const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      className="absolute z-0 h-[calc(100%-12px)] top-1.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
    />
  );
};
