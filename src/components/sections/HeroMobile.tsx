'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import GraphLayer from './GraphLayer'

export default function HeroMobile() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        width: '390px',
        height: '689px',
        borderRadius: '16px',
        backgroundColor: '#D1D6E1',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >

      {/* ── GraphLayer — starts its own internal animation ── */}
      <div style={{ position: 'absolute', left: -33, top: 227 }}>
        <GraphLayer />
      </div>

      {/* ── Humanoid — slide from right + brightness pulse ── */}
      <motion.div
        style={{ position: 'absolute', bottom: 0, left: 130, width: 247, height: 369 }}
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 4.5 }}
      >
        <motion.div
          animate={{
            filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
          }}
          transition={{ delay: 5.3, duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            src="/images/humanoid.png"
            alt="AI humanoid robot"
            width={247}
            height={369}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </motion.div>
      </motion.div>

      {/* ── Text block — centered, top: 68px ── */}
      <div
        style={{
          position: 'absolute',
          top: 68,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 350,
          textAlign: 'center',
        }}
      >
        {/* Line 1 */}
        <motion.p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '38px',
            lineHeight: 1.15,
            letterSpacing: '-0.38px',
            color: 'rgba(10,15,26,0.8)',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4.5, ease: 'easeOut' }}
        >
          Where Clinical Intelligence meets
        </motion.p>

        {/* Line 2 — gradient */}
        <motion.p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '44px',
            lineHeight: 1.05,
            letterSpacing: '-0.44px',
            background: 'linear-gradient(to right, #2473F2 24%, #00B88D 79%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4.65, ease: 'easeOut' }}
        >
          Physical AI for Healthcare
        </motion.p>
      </div>

      {/* ── CTA Button ── */}
      <motion.div
        style={{ position: 'absolute', left: 20, top: 592, width: 350 }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          opacity: { duration: 0.3, delay: 4.85 },
          scale: { delay: 4.85, type: 'spring', stiffness: 320, damping: 14 },
        }}
      >
        <Link
          href="/contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            paddingTop: '18px',
            paddingBottom: '18px',
            backgroundColor: '#0A0F1A',
            borderRadius: '16px',
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.25,
            color: '#F5F7FC',
            textDecoration: 'none',
          }}
        >
          Request a demo
        </Link>
      </motion.div>

    </section>
  )
}
