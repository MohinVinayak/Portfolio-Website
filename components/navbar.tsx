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
      <svg style={{ display: "none" }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        // Tinted the main scroll header background and bottom border
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/40 backdrop-blur-xl border-b border-[#fb4268]/[0.08]" : ""
        }`}
      >
        <nav className="grid grid-cols-3 items-center px-6 py-5 md:px-12">
          
          {/* Logo */}
          <div className="flex justify-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="group flex items-center gap-2.5"
            >
              <span className="font-mono text-xs tracking-[0.25em] text-white">MV</span>
              <span className="w-1 h-1 rounded-full bg-[#fb4268] group-hover:scale-[2.5] transition-transform duration-500 ease-out" />
            </a>
          </div>

          {/* Liquid Navbar */}
          <div className="hidden md:flex justify-center w-full">
            <div 
              // Changed base border from white to a 10% opacity of your custom red
              className="relative rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-1.5 border border-[#fb4268]/10 bg-black/50"
              onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            >
              <div 
                className="absolute inset-0 z-0 backdrop-blur-md isolation-auto" 
                style={{ filter: "url(#lg-dist)" }} 
              />
              
              {/* THE TINT: Changed from white to your custom red hex at 4% opacity */}
              <div className="absolute inset-0 z-1 bg-[#fb4268]/[0.04]" />
              
              {/* THE INNER GLOW: Converted #fb4268 to RGB (251,66,104) to apply alpha shadows */}
              <div className="absolute inset-0 z-2 rounded-full shadow-[inset_1px_1px_0_rgba(251,66,104,0.15),inset_0_0_12px_rgba(251,66,104,0.08)] pointer-events-none" />

              <ul className="relative z-10 flex items-center gap-2 px-2">
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
            </div>
          </div>

          {/* Status */}
          <div className="hidden md:flex justify-end">
            {/* Tinted the status pill background and border to match */}
            <div className="flex items-center gap-3 rounded-full border border-[#fb4268]/15 bg-[#fb4268]/[0.03] px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/70 uppercase">
                Open to Work
              </span>
            </div>
          </div>

          {/* Mobile button */}
          <div className="flex justify-end md:hidden col-span-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-[#fb4268] origin-center transition-transform"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-6 h-px bg-white transition-opacity"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-[#fb4268] origin-center transition-transform"
              />
            </button>
          </div>
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
            className="fixed inset-0 z-40 bg-[#120508]/95 backdrop-blur-xl md:hidden flex items-center justify-center"
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
                  className="text-4xl font-sans tracking-tight text-[#fb4268]/70 hover:text-white transition-colors"
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
      className="relative z-10 block cursor-pointer px-6 py-2.5 font-mono text-xs tracking-[0.2em] uppercase text-white mix-blend-difference"
    >
      {children}
    </motion.li>
  );
};

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
