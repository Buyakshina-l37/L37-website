'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Node data cycling every 3 s ─────────────────────────────────
const NODES = [
  { title: 'Diabetes mellitus',  id: 'DOID:9352',    degree: 24, cluster: 'metabolic', confidence: 0.97, neighbours: 'Insulin...' },
  { title: 'Atrial Fibrillation', id: 'DOID:0060224', degree: 31, cluster: 'cardiac',   confidence: 0.94, neighbours: 'Warfar...'  },
  { title: 'Hypertension',        id: 'DOID:10763',   degree: 18, cluster: 'vascular',  confidence: 0.91, neighbours: 'ACE-in...'  },
]

export default function NodeInfoPanel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timer = setTimeout(() => {
      interval = setInterval(() => setIdx(i => (i + 1) % NODES.length), 3000)
    }, 4000) // wait for entrance animations
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  const n = NODES[idx]

  return (
    <div style={{
      width: 122, height: 108,
      background: 'rgba(245, 247, 252, 0.94)',
      border: '0.5px solid rgba(113, 131, 153, 0.22)',
      borderRadius: 6,
      padding: '6px 8px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 5 }}>
        {/* + circle icon */}
        <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="5.5" cy="5.5" r="5" stroke="#718399" strokeOpacity={0.45} />
          <line x1="5.5" y1="3"   x2="5.5" y2="8"   stroke="#718399" strokeOpacity={0.55} strokeWidth={1} />
          <line x1="3"   y1="5.5" x2="8"   y2="5.5" stroke="#718399" strokeOpacity={0.55} strokeWidth={1} />
        </svg>
        <span style={{
          fontSize: 6,
          fontFamily: '"Denim TRIAL", sans-serif',
          color: '#718399',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          lineHeight: 1,
        }}>
          Node Info
        </span>
      </div>

      {/* ── Animated content — cross-fade on node switch ───── */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title + ID */}
          <div style={{ marginBottom: 5 }}>
            <div style={{
              fontSize: 8.5,
              fontWeight: 600,
              fontFamily: '"Denim TRIAL", sans-serif',
              color: 'rgba(12, 22, 41, 0.87)',
              lineHeight: 1.25,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 106,
            }}>
              {n.title}
            </div>
            <div style={{
              fontSize: 6.5,
              fontFamily: '"Denim TRIAL", sans-serif',
              color: '#718399',
              marginTop: 1,
              lineHeight: 1,
            }}>
              {n.id}
            </div>
          </div>

          {/* Properties — 2×2 grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            rowGap: 4,
            columnGap: 6,
          }}>
            {([
              ['Degree',      n.degree],
              ['Cluster',     n.cluster],
              ['Confidence',  n.confidence],
              ['Neighbours',  n.neighbours],
            ] as [string, string | number][]).map(([label, value]) => (
              <div key={label}>
                <div style={{
                  fontSize: 6,
                  fontFamily: '"Denim TRIAL", sans-serif',
                  color: '#718399',
                  lineHeight: 1.3,
                }}>
                  {label}
                </div>
                <div style={{
                  fontSize: 6.5,
                  fontFamily: '"Courier Prime", monospace',
                  color: 'rgba(12, 22, 41, 0.72)',
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
