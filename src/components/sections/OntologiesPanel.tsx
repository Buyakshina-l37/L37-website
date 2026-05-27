'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Categories + value ranges ────────────────────────────────────
const CATEGORIES = [
  { label: 'Disease',   min: 4.1, max: 4.3 },
  { label: 'Drug',      min: 3.0, max: 3.2 },
  { label: 'Anatomy',   min: 5.7, max: 5.9 },
  { label: 'Phenotype', min: 1.3, max: 1.5 },
]
const INIT_COUNTS = [4.2, 3.1, 5.8, 1.4]

export default function OntologiesPanel() {
  const [activeRadio, setActiveRadio] = useState(-1)
  const [counts, setCounts] = useState(INIT_COUNTS)

  // ── Radio wave: activate 0→1→2→3→0…, every 1.5 s, delay 4 s ──
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

  // ── Number change: random category every 7 s, delay 5 s ────────
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
    <div style={{
      width: 112, height: 110,
      background: 'rgba(245, 247, 252, 0.94)',
      border: '0.5px solid rgba(113, 131, 153, 0.22)',
      borderRadius: 6,
      padding: '6px 8px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <div style={{
        fontSize: 6,
        fontFamily: '"Denim TRIAL", sans-serif',
        color: '#718399',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        lineHeight: 1,
        marginBottom: 6,
      }}>
        Ontologies
      </div>

      {/* ── Category rows ───────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {CATEGORIES.map((cat, i) => {
          const isActive = activeRadio === i
          return (
            <div
              key={cat.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                height: 14,
                borderRadius: 3,
                paddingLeft: isActive ? 2 : 0,
                background: isActive ? 'rgba(36, 115, 242, 0.07)' : 'transparent',
                transition: 'background 0.3s, padding-left 0.3s',
              }}
            >
              {/* Radio circle */}
              <motion.svg
                width={9} height={9} viewBox="0 0 9 9"
                style={{ flexShrink: 0 }}
              >
                <motion.circle
                  cx="4.5" cy="4.5" r="3.5"
                  stroke="#2473F2"
                  strokeWidth={0.8}
                  animate={{
                    fill:    isActive ? '#2473F2' : 'transparent',
                    opacity: isActive ? 1 : 0.4,
                    scale:   isActive ? 1.3 : 1,
                  }}
                  style={{ transformOrigin: '4.5px 4.5px' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </motion.svg>

              {/* Label */}
              <span style={{
                flex: 1,
                fontSize: 7.5,
                fontFamily: '"Denim TRIAL", sans-serif',
                color: isActive ? 'rgba(12, 22, 41, 0.9)' : 'rgba(12, 22, 41, 0.72)',
                lineHeight: 1,
                transition: 'color 0.3s',
              }}>
                {cat.label}
              </span>

              {/* Count — cross-fade on change ──────────────── */}
              <div style={{
                fontSize: 7.5,
                fontFamily: '"Courier Prime", monospace',
                color: '#718399',
                minWidth: 26,
                textAlign: 'right',
                lineHeight: 1,
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
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
