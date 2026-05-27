'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Category data + value ranges ──────────────────────────────
const CATEGORIES = [
  { label: 'Disease',   min: 4.1, max: 4.3 },
  { label: 'Drug',      min: 3.0, max: 3.2 },
  { label: 'Anatomy',   min: 5.7, max: 5.9 },
  { label: 'Phenotype', min: 1.3, max: 1.5 },
]
const INIT_COUNTS = [4.2, 3.1, 5.8, 1.4]

// Exact design tokens from Figma node 13071:5277
// Font: Inter (Regular 400 / Bold 700)
// All text color: #5E6D80
// Panel: 112×110, flex-col gap 8
// Header: Inter Bold 9px, tracking 0.09px
// Each row: h 19, px 6, py 4, border 0.8px rgba(113,131,153,0.3), radius 2px
// Circle indicator: 6×6px, viewBox 0 0 7.6 7.6, r 3.4, stroke #718399 opacity 0.7 width 0.8
// Active: circle fill #2473F2

// ── Radio circle — matches Figma Ellipse 923 asset ────────────
function RadioCircle({ active }: { active: boolean }) {
  return (
    // Container: 6×6 (Figma size-[6px])
    // SVG extends slightly beyond: inset-[-13.33%] → ~0.8px overflow each side
    <div style={{ position: 'relative', width: 6, height: 6, flexShrink: 0 }}>
      <svg
        viewBox="0 0 7.6 7.6"
        width="7.6" height="7.6"
        fill="none"
        style={{
          position: 'absolute',
          top: -0.8, left: -0.8,
          overflow: 'visible',
          display: 'block',
        }}
      >
        <motion.circle
          cx="3.8" cy="3.8" r="3.4"
          stroke="#718399"
          strokeWidth="0.8"
          animate={{
            fill:         active ? '#2473F2' : 'none',
            stroke:       active ? '#2473F2' : '#718399',
            strokeOpacity: active ? 1 : 0.7,
            scale:        active ? 1.3 : 1,
          }}
          style={{ transformOrigin: '3.8px 3.8px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}

export default function OntologiesPanel() {
  const [activeRadio, setActiveRadio] = useState(-1)
  const [counts, setCounts] = useState(INIT_COUNTS)

  // Radio wave: 0→1→2→3→0…, every 1.5 s, starts after 4 s
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      setActiveRadio(0)
      interval = setInterval(
        () => setActiveRadio(prev => (prev + 1) % CATEGORIES.length),
        1500,
      )
    }, 4000)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  // Number change: random category every 7 s, starts after 5 s
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        const i     = Math.floor(Math.random() * CATEGORIES.length)
        const delta = Math.random() > 0.5 ? 0.1 : -0.1
        setCounts(prev => {
          const clamped = Math.round(
            Math.max(CATEGORIES[i].min, Math.min(CATEGORIES[i].max, prev[i] + delta)) * 10,
          ) / 10
          const next = [...prev]
          next[i] = clamped
          return next
        })
      }, 7000)
    }, 5000)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  return (
    // Panel: 112×110, flex-col gap 8, no background
    <div style={{
      width: 112, height: 110,
      display: 'flex', flexDirection: 'column', gap: 8,
      fontFamily: 'var(--font-inter), Inter, sans-serif',
    }}>

      {/* ── "ONTOLOGIES" header ──────────────────────────── */}
      <p style={{
        margin: 0,
        fontSize: 9, fontWeight: 700, color: '#5E6D80',
        letterSpacing: '0.09px', lineHeight: 'normal',
        whiteSpace: 'nowrap',
      }}>
        ONTOLOGIES
      </p>

      {/* ── Category rows — gap 5 ────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {CATEGORIES.map((cat, i) => {
          const isActive = activeRadio === i
          return (
            <div
              key={cat.label}
              style={{
                height: 19,
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingLeft: 6, paddingRight: 6,
                paddingTop: 4, paddingBottom: 4,
                border: '0.8px solid rgba(113, 131, 153, 0.3)',
                borderRadius: 2,
                boxSizing: 'border-box',
                background: isActive ? 'rgba(36, 115, 242, 0.06)' : 'transparent',
                transition: 'background 0.3s ease',
              }}
            >
              {/* Left: circle + label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <RadioCircle active={isActive} />
                <span style={{
                  fontSize: 9, fontWeight: 400, color: '#5E6D80',
                  whiteSpace: 'nowrap', lineHeight: 'normal',
                }}>
                  {cat.label}
                </span>
              </div>

              {/* Right: count with cross-fade */}
              <span style={{
                fontSize: 8, fontWeight: 400, color: '#5E6D80',
                textAlign: 'right', lineHeight: 'normal',
                minWidth: 24,
              }}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={counts[i].toFixed(1)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                  >
                    {counts[i].toFixed(1)}k
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
