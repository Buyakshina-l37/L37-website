'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import GraphLayer from './GraphLayer'
import CardLive from './CardLive'

/**
 * HeroSection — entrance animation in 6 phases (Framer Motion)
 *
 * Phase 1 (0–0.8s)    Hospital     — slide-in from left + fade
 * Phase 2 (0.6–1.4s)  Cards        — stagger scale+fade, then infinite float
 * Phase 3 (1.2–2.0s)  Graph        — handled inside GraphLayer
 * Phase 4 (1.8–2.4s)  UI panels    — slide-up + fade, stagger
 * Phase 5 (2.2–3.0s)  Humanoid     — slide-in from right + fade, brightness pulse
 * Phase 6 (2.8–3.4s)  Text+button  — slide-up + fade, bounce CTA
 *
 * Micro-animations (continuous after entrance):
 * Task 1: Live numbers on cards (cross-fade, Courier Prime, useState+setInterval)
 * Task 2: Datapoint indicator pulse on each card
 * Task 3: Query Log row highlight loop
 * Tasks 4-6: handled in GraphLayer (traveling dash, node wave, sphere ripple)
 */

// ── Card data: position, float amplitude, float duration ────────
const CARDS = [
  { key: 'BP',   alt: 'Blood Pressure',   left: 124, top: 132, w: 59, h: 32, amp: -5, floatDur: 3.8, pulseDelay: 4.2 },
  { key: 'HR',   alt: 'Heart Rate',       left: 401, top: 88,  w: 59, h: 32, amp: -4, floatDur: 3.2, pulseDelay: 4.6 },
  { key: 'Sp',   alt: 'SpO2',             left: 648, top: 111, w: 59, h: 32, amp: -6, floatDur: 4.0, pulseDelay: 5.0 },
  { key: 'RR',   alt: 'Respiratory Rate', left: 285, top: 380, w: 59, h: 32, amp: -5, floatDur: 3.5, pulseDelay: 5.4 },
  { key: 'EMG',  alt: 'EMG',              left: 624, top: 363, w: 59, h: 36, amp: -4, floatDur: 4.2, pulseDelay: 5.8 },
  { key: 'Temp', alt: 'Temperature',      left: 749, top: 330, w: 59, h: 36, amp: -6, floatDur: 3.0, pulseDelay: 6.2 },
]

// ── UI panel data: position + stagger index ──────────────────────
const PANELS = [
  { src: '/images/node-info.svg',   alt: 'Node Info',   left: 1017, top: 102, w: 122, h: 108, layer: 'layerNodeInfo' },
  { src: '/images/ontologies.svg',  alt: 'Ontologies',  left: 1228, top: 146, w: 112, h: 110, layer: 'layerOntologies' },
]

// ── Query Log row positions (from Figma: frame 13071:5334) ──────
// Panel: 112×110, rows within content-frame at y=19
const QUERY_LOG_ROWS = [
  { y: 19, h: 19 },  // MATCH (d:Disease)
  { y: 43, h: 19 },  // WHERE d.icd11 = …
  { y: 67, h: 19 },  // RETURN path…
  { y: 91, h: 19 },  // LIMIT 200
]

// ── Query Log highlight loop (Task 3) ──────────────────────────
function QueryLogHighlight() {
  const [activeRow, setActiveRow] = useState(-1)

  useEffect(() => {
    // Start after entrance animation (~2.3s panel entry + 0.5s)
    let row = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const advance = () => {
      setActiveRow(row)
      if (row < QUERY_LOG_ROWS.length - 1) {
        row++
        timeoutId = setTimeout(advance, 1200)
      } else {
        // Last row shown: pause 3s then restart
        timeoutId = setTimeout(() => {
          row = 0
          advance()
        }, 3000)
      }
    }

    // Initial delay to let entrance complete
    timeoutId = setTimeout(advance, 3500)
    return () => clearTimeout(timeoutId)
  }, [])

  if (activeRow < 0) return null

  const rowConfig = QUERY_LOG_ROWS[activeRow]
  return (
    <motion.div
      key={activeRow}
      style={{
        position: 'absolute',
        left: 0,
        top: rowConfig.y,
        width: 112,
        height: rowConfig.h,
        backgroundColor: 'rgba(113, 131, 153, 0.1)',
        borderRadius: 2,
        pointerEvents: 'none',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="Hero"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1609px',
        height: '755px',
        borderRadius: '24px',
        backgroundColor: '#D1D6E1',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >

      {/* ─── Phase 1: Hospital — slide from left ─────────────────────── */}
      <motion.div
        data-layer="layerHospital"
        style={{ position: 'absolute', left: 0, top: 8, width: 912, height: 499 }}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
      >
        <Image
          src="/images/hospital.png"
          alt="Hospital environment"
          width={912}
          height={499}
          priority
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>

      {/* ─── Phase 2: Data cards — CardLive with entrance + float + live numbers ─── */}
      {CARDS.map((card, i) => (
        <CardLive
          key={card.key}
          cardKey={card.key}
          left={card.left}
          top={card.top}
          amp={card.amp}
          floatDur={card.floatDur}
          entranceDelay={0.6 + i * 0.12}
          pulseDelay={card.pulseDelay}
        />
      ))}

      {/* ─── Phase 3: Graph — GraphLayer handles its own animation ──── */}
      <div style={{ position: 'absolute', left: 954, top: 223, width: 389, height: 421 }}>
        <GraphLayer />
      </div>

      {/* ─── Phase 4: UI panels — node-info + ontologies (slide up + fade) ─── */}
      {PANELS.map((panel, i) => (
        <motion.img
          key={panel.src}
          data-layer={panel.layer}
          src={panel.src}
          alt={panel.alt}
          width={panel.w}
          height={panel.h}
          style={{ position: 'absolute', left: panel.left, top: panel.top, width: panel.w, height: panel.h }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 + i * 0.15, ease: 'easeOut' }}
        />
      ))}

      {/* ─── Phase 4: Query Log panel + highlight overlay (Task 3) ─── */}
      <motion.div
        data-layer="layerQueryLog"
        style={{ position: 'absolute', left: 828, top: 461, width: 112, height: 110 }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 + 2 * 0.15, ease: 'easeOut' }}
      >
        {/* Static query-log SVG image */}
        <img
          src="/images/query-log.svg"
          alt="Query Log"
          width={112}
          height={110}
          style={{ position: 'absolute', left: 0, top: 0, width: 112, height: 110, display: 'block' }}
        />
        {/* Highlight overlay (absolutely positioned within this div) */}
        <QueryLogHighlight />
      </motion.div>

      {/* ─── Phase 5: Humanoid — slide from right + brightness pulse ─── */}
      <motion.div
        data-layer="layerHumanoid"
        style={{ position: 'absolute', left: 1249, top: 298, width: 305, height: 457 }}
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 2.2 }}
      >
        <motion.div
          animate={{
            filter: [
              'brightness(1)',
              'brightness(1.3)',
              'brightness(1)',
            ],
          }}
          transition={{ delay: 3.0, duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            src="/images/humanoid.png"
            alt="AI humanoid robot"
            width={305}
            height={457}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </motion.div>
      </motion.div>

      {/* ─── Phase 6: Text + button ──────────────────────────────────── */}
      <div
        data-layer="layerTextBlock"
        style={{ position: 'absolute', left: 100, top: 464, width: 598, height: 205 }}
      >
        {/* Line 1 */}
        <motion.p
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 530,
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '48px',
            color: 'rgba(12,22,41,0.8)',
            whiteSpace: 'nowrap',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8, ease: 'easeOut' }}
        >
          Where Clinical Intelligence meets
        </motion.p>

        {/* Line 2 — gradient */}
        <motion.p
          style={{
            position: 'absolute',
            left: 0,
            top: 51,
            width: 598,
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '56px',
            lineHeight: '64px',
            background: 'linear-gradient(to right, #2473F2 24%, #00B88D 79%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            whiteSpace: 'nowrap',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.95, ease: 'easeOut' }}
        >
          Physical AI in Healthcare
        </motion.p>

        {/* CTA button — bounce entrance */}
        <motion.div
          style={{ position: 'absolute', left: 0, top: 149 }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            opacity: { duration: 0.3, delay: 3.15 },
            scale: {
              delay: 3.15,
              type: 'spring',
              stiffness: 320,
              damping: 14,
            },
          }}
        >
          <Link
            href="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 185,
              height: 56,
              backgroundColor: '#0C1629',
              borderRadius: '8px',
              fontFamily: '"Denim TRIAL", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: 1.25,
              color: '#F5F7FC',
              textDecoration: 'none',
            }}
          >
            Watch demo
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
