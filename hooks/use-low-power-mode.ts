"use client"

import { useEffect, useState } from "react"

// Detects hardware that's visibly struggling to keep up with the page's
// animations, so expensive effects (e.g. the navbar's SVG liquid-distortion
// filter) can fall back to a cheaper rendering path. Uses two signals:
//  1. `prefers-reduced-motion` — an explicit, immediate opt-out.
//  2. A short rAF frame-timing sample taken right after mount — if a
//     meaningful fraction of frames are janky while the page's existing
//     animations (WebGL sphere, marquees, pulses) are already running,
//     the extra cost of the filter almost certainly isn't worth it.
// This never changes anything for hardware that's keeping up fine.
export function useLowPowerMode() {
  const [lowPowerMode, setLowPowerMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Only knowable client-side (post-mount), can't be computed during SSR render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLowPowerMode(true)
      return
    }

    const WARMUP_FRAMES = 10
    const SAMPLE_FRAMES = 50
    const JANK_THRESHOLD_MS = 24 // ~< 42fps
    const JANK_RATIO_TRIGGER = 0.3 // >30% janky frames = struggling

    let frame = 0
    let slowFrames = 0
    let last = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const delta = now - last
      last = now
      frame++

      if (frame > WARMUP_FRAMES) {
        if (delta > JANK_THRESHOLD_MS) slowFrames++

        if (frame - WARMUP_FRAMES >= SAMPLE_FRAMES) {
          if (slowFrames / SAMPLE_FRAMES > JANK_RATIO_TRIGGER) {
            setLowPowerMode(true)
          }
          return
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return lowPowerMode
}
