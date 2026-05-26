'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CARD_SVG_DATA } from './card-svg-data'

// ── Live value ranges & intervals per card type ─────────────────
const LIVE_CONFIG: Record<string, {
  initial: string
  getNext: () => string
  intervalMs: number
}> = {
  BP: {
    initial: '118',
    getNext: () => (116 + Math.floor(Math.random() * 6)).toString(),
    intervalMs: 3400,
  },
  HR: {
    initial: '72',
    getNext: () => (70 + Math.floor(Math.random() * 7)).toString(),
    intervalMs: 2600,
  },
  Sp: {
    initial: '98',
    getNext: () => (97 + Math.floor(Math.random() * 3)).toString(),
    intervalMs: 5000,
  },
  RR: {
    initial: '16',
    getNext: () => (14 + Math.floor(Math.random() * 5)).toString(),
    intervalMs: 4200,
  },
  EMG: {
    initial: '0.4',
    getNext: () => (0.3 + Math.round(Math.random() * 3) * 0.1).toFixed(1),
    intervalMs: 1500,
  },
  Temp: {
    initial: '36.6',
    getNext: () => (36.5 + Math.round(Math.random() * 2) * 0.1).toFixed(1),
    intervalMs: 6000,
  },
}

interface Props {
  cardKey: string   // 'BP' | 'HR' | 'Sp' | 'RR' | 'EMG' | 'Temp'
  left: number
  top: number
  amp: number
  floatDur: number
  entranceDelay: number
  pulseDelay: number  // stagger offset for datapoint pulse
}

export default function CardLive({
  cardKey, left, top, amp, floatDur, entranceDelay, pulseDelay,
}: Props) {
  const svg = CARD_SVG_DATA[cardKey as keyof typeof CARD_SVG_DATA]
  const live = LIVE_CONFIG[cardKey]
  const [value, setValue] = useState(live.initial)

  useEffect(() => {
    // Stagger the first update slightly to desync cards
    const jitter = Math.random() * 800
    let intervalId: ReturnType<typeof setInterval> | null = null
    const firstTimer = setTimeout(() => {
      setValue(live.getNext())
      intervalId = setInterval(() => setValue(live.getNext()), live.intervalMs)
    }, live.intervalMs + jitter)
    return () => {
      clearTimeout(firstTimer)
      if (intervalId !== null) clearInterval(intervalId)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      data-layer={`layerCard${cardKey}`}
      style={{
        position: 'absolute',
        left,
        top,
        width: svg.w,
        height: svg.h,
        cursor: 'default',
        userSelect: 'none',
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, amp, 0] }}
      transition={{
        scale:   { duration: 0.5, delay: entranceDelay, ease: 'easeOut' },
        opacity: { duration: 0.5, delay: entranceDelay },
        y: {
          duration: floatDur,
          delay: entranceDelay + 0.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
      }}
    >
      <svg
        width={svg.w}
        height={svg.h}
        viewBox={svg.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        {/* Background */}
        {svg.bgPath ? (
          <path d={svg.bgPath} fill="#718399" fillOpacity={0.1} />
        ) : (
          /* card-Temp uses a rect for background */
          <rect width={59} height={36} rx={4} fill="#718399" fillOpacity={0.1} />
        )}

        {/* Label (BP, HR, SpO2…) — static */}
        <path d={svg.labelPath} fill="#5E6D80" fillOpacity={0.8} />

        {/* Datapoint indicator — pulse animation (Task 2) */}
        <motion.rect
          x={47} y={7} width={4} height={4}
          fill="#5E6D80"
          style={{ transformOrigin: '49px 9px' }}
          animate={{
            scale:   [1, 1.4, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            delay: pulseDelay,
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Unit label (Hg, /min…) — static, optional */}
        {svg.unitPath && (
          <path d={svg.unitPath} fill="#5E6D80" fillOpacity={0.8} />
        )}

        {/* ── Live number with cross-fade (Task 1) ─────────── */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.text
            key={value}
            x={svg.numX}
            y={svg.numY}
            fill="#5E6D80"
            style={{
              fontFamily: '"Courier Prime", "Courier New", Courier, monospace',
              fontSize: 14,
              fontWeight: 400,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {value}
          </motion.text>
        </AnimatePresence>
      </svg>
    </motion.div>
  )
}
