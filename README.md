
# Mohin Vinayak — Portfolio

A meticulously engineered digital portfolio built on **Next.js 15**, **Framer Motion**, **Three.js**, and **Lenis**. High-performance, brutalist editorial design with zero compromises on smoothness, precision, or visual impact.

> Ship something real. The only metric that counts.

---

## Tech Stack

![Next.js 15](https://img.shields.io/badge/Next.js-15.0.3-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-0055FF?style=flat-square&logo=framer)
![Three.js](https://img.shields.io/badge/Three.js-0.169-000000?style=flat-square&logo=three.js)
![Lenis](https://img.shields.io/badge/Lenis-1.1.14-000000?style=flat-square)

---

## Key Features

*   **Spring-Physics Cursor:** Built with `useMotionValue` and `useSpring` for a mechanical feel. A fast-tracking dot (`stiffness: 800`) paired with a gracefully lagging ring (`stiffness: 120`). Uses `mix-blend-difference` for universal contrast.
*   **Tuned Smooth Scroll:** Lenis configured for intentional momentum (`lerp: 0.07`, `duration: 1.6`, `wheelMultiplier: 0.9`). Scroll feels like moving through honey, avoiding janky easing functions.
*   **Liquid Glass Navigation:** A floating pill utilizing `backdropFilter: blur(28px) saturate(200%)` and inset shadows. Animates dynamically based on scroll depth.
*   **Viewport-Safe Typography:** Avoids Turbopack `clamp()` compilation issues with a strict breakpoint cascade (`text-7xl` to `9xl`). Interlocks solid and outlined italic text securely on a single axis.
*   **Interactive Tech Marquee:** Seamless, 4x duplicated carousel of outlined text (`WebkitTextStroke: 1px`) that shifts to a solid fill on hover with a 0.25s transition.

---

## Installation & Quick Start

Requires Node.js 18+ and `pnpm`.

```bash
git clone <your-repo-url>
cd portfolio2

pnpm install
pnpm dev

```

---

## Architecture & Engineering

* **Cursor Optimization:** Relies on `useMotionValue` instead of `useState` to completely eliminate layout thrashing and re-renders on continuous `mousemove` events.
* **Type-Safe Easing:** Uses explicit tuple typing (`const ease: [number, number, number, number]`) to prevent Framer Motion type-inference breakdowns in Next.js strict mode.
* **Shader-Based Parallax:** The background avoids heavy polygon meshes, utilizing a lightweight Three.js shader icosphere driven by `useTransform` tied to `scrollYProgress`.
* **Design System:** Built on an absolute black/white contrast with a deep crimson accent (`oklch(0.55 0.21 25)`). Typography combines Playfair Display for editorial headers and Geist Mono for technical precision.

 **Theming:** CSS custom property switches for dark/light mode and alternate accent colors, persisted via `localStorage`.

---

## File Structure (Abridged)

```text
.
├── app/
│   ├── layout.tsx           # Fonts, providers
│   ├── page.tsx             # Main view assembly
│   └── globals.css          # Tailwind, variables
├── components/
│   ├── custom-cursor.tsx    # useMotionValue physics
│   ├── smooth-scroll.tsx    # Lenis wrapper
│   ├── sentient-sphere.tsx  # Three.js shader
│   └── ...                  # Standard UI components
└── ...

```

---

## Credits & License

Built by **Mohin Vinayak**.
Motion philosophy inspired by Framer and Apple's spatial design principles.

**MIT License.** Use as a reference, template, or starting point.

```

```
