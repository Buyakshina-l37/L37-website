'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Node data ──────────────────────────────────────────────────
const NODES = [
  { title: 'Diabetes mellitus',   id: 'DOID:9352',    degree: 24, cluster: 'metabolic', confidence: 0.97, neighbours: 'Insulin…' },
  { title: 'Atrial Fibrillation', id: 'DOID:0060224', degree: 31, cluster: 'cardiac',   confidence: 0.94, neighbours: 'Warfar…'  },
  { title: 'Hypertension',        id: 'DOID:10763',   degree: 18, cluster: 'vascular',  confidence: 0.91, neighbours: 'ACE-in…'  },
]

// Exact design tokens from Figma node 13156:11627
// Outer: flex-col, gap 8, w 122
// Header: Inter Bold 9px, #5E6D80, tracking 0.09px
// Content box 13156:11629: bg white, border 0.8px rgba(113,131,153,0.3), rounded 2, p 8, flex-col gap 8
// Icon row 13156:11628: flex, gap 6, items-center
// Icon 13071:5319: 16×16
// Title block 13071:5303: flex-col gap 2, w 73 — title 9px, id 7px — color #5E6D80
// Properties 13071:5306: flex-col gap 4, 8px, whitespace nowrap — color #5E6D80

const INTER: React.CSSProperties = {
  fontFamily: 'var(--font-inter), Inter, sans-serif',
  color: '#5E6D80',
}

export default function NodeInfoPanel() {
  const [idx, setIdx] = useState(0)

  // Cycle nodes every 3 s, starts after 4 s entrance delay
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      interval = setInterval(() => setIdx(i => (i + 1) % NODES.length), 3000)
    }, 6200)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  const n = NODES[idx]

  return (
    // Outer wrapper: 122px wide, flex-col gap 8 — matches Figma 13156:11627
    <div style={{
      width: 122,
      display: 'flex', flexDirection: 'column', gap: 8,
      fontFamily: 'var(--font-inter), Inter, sans-serif',
    }}>

      {/* ── "NODE INFO" header ───────────────────────────── */}
      <p style={{
        margin: 0,
        fontSize: 9, fontWeight: 700, color: '#5E6D80',
        letterSpacing: '0.09px', lineHeight: 'normal',
        whiteSpace: 'nowrap',
      }}>
        NODE INFO
      </p>

      {/* ── Content box 13156:11629: bg white, border, p 8, gap 8 ── */}
      <div style={{
        background: 'transparent',
        border: '0.8px solid rgba(113, 131, 153, 0.3)',
        borderRadius: 2,
        padding: 8,
        display: 'flex', flexDirection: 'column', gap: 8,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>

        {/* ── Animated: icon row + properties cross-fade ── */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {/* Top row: circle icon (16×16) + title/id — gap 6, items-center */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>

              {/* Circle icon 13071:5319 — 16×16 */}
              <div style={{ width: 16, height: 16, flexShrink: 0 }}>
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <path opacity="0.55" d="M8.10177 5V11.1348"   stroke="#5E6D80" strokeWidth="1" />
                  <path opacity="0.55" d="M5.00008 8.06742H11.2035" stroke="#5E6D80" strokeWidth="1" />
                  <circle cx="8" cy="8" r="7.6" stroke="#718399" strokeOpacity="0.5" strokeWidth="0.8" />
                  <circle cx="8" cy="8" r="4.6" stroke="#718399" strokeOpacity="0.5" strokeWidth="0.8" />
                </svg>
              </div>

              {/* Title + ID block 13071:5303 — flex-col gap 2, w 73 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: 73 }}>
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
            </div>

            {/* Properties block 13071:5306 — flex-col gap 4, 8px, nowrap */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              {([
                ['Degree',     String(n.degree)],
                ['Cluster',    n.cluster],
                ['Confidence', String(n.confidence)],
                ['Neighbours', n.neighbours],
              ] as [string, string][]).map(([label, value]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 8, fontWeight: 400, whiteSpace: 'nowrap', ...INTER }}>{label}</span>
                  <span style={{ fontSize: 8, fontWeight: 400, textAlign: 'right', whiteSpace: 'nowrap', ...INTER }}>{value}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
