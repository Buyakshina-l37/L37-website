'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import GraphLayer from './GraphLayer'

/**
 * HeroSection — entrance animation in 6 phases (Framer Motion)
 *
 * Phase 1 (0–0.8s)    Hospital     — slide-in from left + fade
 * Phase 2 (0.6–1.4s)  Cards        — stagger scale+fade, then infinite float
 * Phase 3 (1.2–2.0s)  Graph        — handled inside GraphLayer
 * Phase 4 (1.8–2.4s)  UI panels    — slide-up + fade, stagger
 * Phase 5 (2.2–3.0s)  Humanoid     — slide-in from right + fade, brightness pulse
 * Phase 6 (2.8–3.4s)  Text+button  — slide-up + fade, bounce CTA
 */

// ── Card data: position, float amplitude, float duration ────────
const CARDS = [
  { src: '/images/card-BP.svg',   alt: 'Blood Pressure',    left: 138, top: 92,  w: 59, h: 32, amp: -5, floatDur: 3.8 },
  { src: '/images/card-HR.svg',   alt: 'Heart Rate',        left: 302, top: 100, w: 59, h: 32, amp: -4, floatDur: 3.2 },
  { src: '/images/card-Sp.svg',   alt: 'SpO2',              left: 565, top: 128, w: 59, h: 32, amp: -6, floatDur: 4.0 },
  { src: '/images/card-RR.svg',   alt: 'Respiratory Rate',  left: 379, top: 370, w: 59, h: 32, amp: -5, floatDur: 3.5 },
  { src: '/images/card-EMG.svg',  alt: 'EMG',               left: 600, top: 384, w: 59, h: 36, amp: -4, floatDur: 4.2 },
  { src: '/images/card-Temp.svg', alt: 'Temperature',       left: 698, top: 351, w: 59, h: 36, amp: -6, floatDur: 3.0 },
]

// ── UI panel data: position + stagger index ──────────────────────
const PANELS = [
  { src: '/images/node-info.svg',   alt: 'Node Info',   left: 1017, top: 102, w: 122, h: 108, layer: 'layerNodeInfo' },
  { src: '/images/ontologies.svg',  alt: 'Ontologies',  left: 1228, top: 146, w: 112, h: 110, layer: 'layerOntologies' },
  { src: '/images/query-log.svg',   alt: 'Query Log',   left: 828,  top: 461, w: 112, h: 110, layer: 'layerQueryLog' },
]

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

      {/* ─── Phase 2: Data cards — stagger entrance + infinite float ─── */}
      {CARDS.map((card, i) => {
        const entranceDelay = 0.6 + i * 0.12
        const floatDelay = entranceDelay + 0.5
        return (
          <motion.img
            key={card.src}
            data-layer={`layerCard${card.alt.replace(/\s/g, '')}`}
            src={card.src}
            alt={card.alt}
            width={card.w}
            height={card.h}
            style={{ position: 'absolute', left: card.left, top: card.top, width: card.w, height: card.h }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, card.amp, 0],
            }}
            transition={{
              scale:   { duration: 0.5, delay: entranceDelay, ease: 'easeOut' },
              opacity: { duration: 0.5, delay: entranceDelay },
              y: {
                duration: card.floatDur,
                delay: floatDelay,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            }}
          />
        )
      })}

      {/* ─── Phase 3: Graph — GraphLayer handles its own animation ──── */}
      <div style={{ position: 'absolute', left: 954, top: 223, width: 389, height: 421 }}>
        <GraphLayer />
      </div>

      {/* ─── Phase 4: UI panels — slide up + fade, stagger 0.15s ─────── */}
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
            fontSize: '44px',
            lineHeight: '51px',
            color: 'rgba(12,22,41,0.8)',
            whiteSpace: 'nowrap',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8, ease: 'easeOut' }}
        >
          Clinical Intelligence for Safe&nbsp;
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
