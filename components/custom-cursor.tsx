"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const visible = useRef(false)
  const hovering = useRef(false)
  const raf = useRef<number>(0)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch devices and skip cursor entirely
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const update = () => {
      if (dotRef.current) {
        const s = hovering.current ? 0 : 5
        dotRef.current.style.transform = `translate3d(${pos.current.x - 6}px, ${pos.current.y - 6}px, 0) scale(${s})`
        dotRef.current.style.opacity = visible.current ? "1" : "0"
      }
      if (ringRef.current) {
        const s = hovering.current ? 1 : 0
        ringRef.current.style.transform = `translate3d(${pos.current.x - 24}px, ${pos.current.y - 24}px, 0) scale(${s})`
        ringRef.current.style.opacity = visible.current ? "1" : "0"
      }
      raf.current = requestAnimationFrame(update)
    }

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      visible.current = true
    }

    const onEnter = () => { visible.current = true }
    const onLeave = () => { visible.current = false }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        hovering.current = true
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        hovering.current = false
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseout", onOut, { passive: true })
    raf.current = requestAnimationFrame(update)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: "transform", opacity: 0, transition: "opacity 0.15s" }}
      />
      {/* Hover ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: "transform", opacity: 0, transition: "transform 0.18s ease, opacity 0.15s" }}
      />
    </>
  )
}
