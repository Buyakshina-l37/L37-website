'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Node data ──────────────────────────────────────────────────
const NODES = [
  { title: 'Diabetes mellitus',  id: 'DOID:9352',    degree: 24, cluster: 'metabolic', confidence: 0.97, neighbours: 'Insulin…' },
  { title: 'Atrial Fibrillation', id: 'DOID:0060224', degree: 31, cluster: 'cardiac',   confidence: 0.94, neighbours: 'Warfar…'  },
  { title: 'Hypertension',        id: 'DOID:10763',   degree: 18, cluster: 'vascular',  confidence: 0.91, neighbours: 'ACE-in…'  },
]

// Exact design tokens from Figma node 13071:5300
// Font: Inter (Regular 400 / Bold 700)
// All text color: #5E6D80
// Panel: 122×108, no background (label floats on hero bg)
// Content box: top=17, h=91, w=122, border 0.8px rgba(113,131,153,0.3), radius 2px, bg white

const INTER: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, sans-serif',
  color: '#5E6D80',
}

export default function NodeInfoPanel() {
  const [idx, setIdx] = useState(0)

  // Cycle nodes: 3 s per node, starts after 4 s entrance delay
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      interval = setInterval(() => setIdx(i => (i + 1) % NODES.length), 3000)
    }, 4000)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  const n = NODES[idx]

  return (
    // Outer wrapper: 122×108, no background — label text floats on hero
    <div style={{ width: 122, height: 108, position: 'relative' }}>

      {/* ── "NODE INFO" header label ─────────────────────── */}
      <p style={{
        position: 'absolute', top: 0, left: 0,
        margin: 0,
        fontSize: 9, fontWeight: 700,
        letterSpacing: '0.09px', lineHeight: '11px',
        whiteSpace: 'nowrap',
        ...INTER,
      }}>
        NODE INFO
      </p>

      {/* ── Content box: top 17, h 91, w 122 ────────────── */}
      <div style={{
        position: 'absolute', left: 0, top: 17,
        width: 122, height: 91,
        background: '#FFFFFF',
        border: '0.8px solid rgba(113, 131, 153, 0.3)',
        borderRadius: 2,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>

        {/* + circle icon — static, 16×16 at left 6, top 7 */}
        <div style={{ position: 'absolute', left: 6, top: 7, width: 16, height: 16, pointerEvents: 'none' }}>
          <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
            <path opacity="0.55" d="M8.10177 5V11.1348"   stroke="#5E6D80" strokeWidth="1" />
            <path opacity="0.55" d="M5.00008 8.06742H11.2035" stroke="#5E6D80" strokeWidth="1" />
            <circle cx="8" cy="8" r="7.6" stroke="#718399" strokeOpacity="0.5" strokeWidth="0.8" />
            <circle cx="8" cy="8" r="4.6" stroke="#718399" strokeOpacity="0.5" strokeWidth="0.8" />
          </svg>
        </div>

        {/* ── Animated: title + ID + properties ────────── */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={idx}
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Node title + ID — left 25.2, top 3.2, w 73 */}
            <div style={{
              position: 'absolute', left: 25.2, top: 3.2, width: 73,
              display: 'flex', flexDirection: 'column', gap: 2,
            }}>
              <p style={{
                margin: 0, fontSize: 9, fontWeight: 400,
                lineHeight: 'normal', whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis',
                ...INTER,
              }}>
                {n.title}
              </p>
              <p style={{ margin: 0, fontSize: 7, fontWeight: 400, lineHeight: 'normal', ...INTER }}>
                {n.id}
              </p>
            </div>

            {/* Properties — centered (left 7 = 50%−54), top 31.2, w 108 */}
            <div style={{
              position: 'absolute', left: 7, top: 31.2, width: 108,
              display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              {([
                ['Degree',     String(n.degree)],
                ['Cluster',    n.cluster],
                ['Confidence', String(n.confidence)],
                ['Neighbours', n.neighbours],
              ] as [string, string][]).map(([label, value]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 8, fontWeight: 400, ...INTER }}>{label}</span>
                  <span style={{ fontSize: 8, fontWeight: 400, textAlign: 'right', ...INTER }}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
