'use client'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PHRASES = ['Clinical AI', 'Agentic AI', 'Physical AI']

const CARDS = [
  {
    num: '/01',
    title: 'Agentic AI for Healthcare',
    body: 'Deep Real-World Data and agentic expertise, combined into bespoke solutions — autonomous workflows that turn each client\'s clinical evidence into action.',
  },
  {
    num: '/02',
    title: 'Digital Twins for Clinical & Physical AI',
    body: 'Operational twins of hospital assets, robots and care pathways — one continuous model linking physical operations to clinical outcomes.',
  },
  {
    num: '/03',
    title: 'SimReady Assets for OEM',
    body: 'Simulation-ready, AI-enabled medical asset models for OEMs — accelerate robotics and device development with physically accurate twins built on our ontology.',
  },
  {
    num: '/04',
    title: 'Digital & Physical Robots for Healthcare',
    body: 'Social, nurse, rehabilitation and MD-assisting robots, integrated and orchestrated by agentic AI — deployed safely on clinical-grade edge infrastructure.',
  },
  {
    num: '/05',
    title: 'Consulting Services for Physical AI',
    body: 'Strategy-to-deployment advisory — from use-case selection and ROI modelling to integration, compliance and clinical validation.',
  },
  {
    num: '/06',
    title: 'Ontology, Graph & RAG at the Core',
    body: 'A clinical-operational ontology and knowledge graph sit at the center of everything — powering retrieval-augmented agents that stay accurate, explainable and compliant.',
  },
  {
    num: '/07',
    title: 'Real-World Evidence as a Service',
    body: 'Curated, de-identified real-world evidence — EHRs, claims, trials and publications — structured on our ontology and AI-ready.',
  },
  {
    num: '/08',
    title: 'Compliance & Trust by Design',
    body: 'HIPAA, HDS and GDPR controls, audit trails and consent management built into the platform, not bolted on.',
  },
]

// Figma specs: card 330×391px, gap 16px, gradient 130.164deg
// Centered at 390px viewport: (390-330)/2 = 30px initial offset
// Each step: 330+16 = 346px
const CARD_WIDTH = 330
const CARD_GAP = 16
const CARD_HEIGHT = 391
const CARD_BG = 'linear-gradient(130.164deg, rgb(214,229,255) 0%, rgb(232,245,239) 100%)'

function CardCarousel() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchCurrentX = useRef<number>(0)
  const isDragging = useRef(false)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchCurrentX.current = e.touches[0].clientX
    isDragging.current = true
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    touchCurrentX.current = e.touches[0].clientX
  }
  const onTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    const delta = touchStartX.current - touchCurrentX.current
    if (delta > 50 && active < CARDS.length - 1) setActive(i => i + 1)
    else if (delta < -50 && active > 0) setActive(i => i - 1)
  }

  // Center active card: 30px left margin + shift by (card + gap) per step
  const translateX = `calc(30px - ${active} * ${CARD_WIDTH + CARD_GAP}px)`

  return (
    <div>
      {/* Slider track — overflow hidden, full section width */}
      <div
        style={{ overflow: 'hidden', width: '100%' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            transition: 'transform 350ms ease',
            transform: `translateX(${translateX})`,
            willChange: 'transform',
          }}
        >
          {CARDS.map((card) => (
            // Figma: w=330 h=391 rounded-16 overflow-clip
            <div
              key={card.num}
              style={{
                flexShrink: 0,
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
                borderRadius: '16px',
                backgroundImage: CARD_BG,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Number — absolute top:32 right:32, 24px medium, opacity 0.3 */}
              <p
                style={{
                  position: 'absolute',
                  top: 32,
                  right: 32,
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: '-0.24px',
                  color: '#141B29',
                  opacity: 0.3,
                  fontFamily: '"Denim TRIAL", sans-serif',
                }}
              >
                {card.num}
              </p>

              {/* Content — absolute left:32 top:115 width:266 height:244, flex col space-between */}
              <div
                style={{
                  position: 'absolute',
                  left: 32,
                  top: 115,
                  width: 266,
                  height: 244,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '28px',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    letterSpacing: '-0.28px',
                    color: '#141B29',
                    fontFamily: '"Denim TRIAL", sans-serif',
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: 1.4,
                    letterSpacing: '0.36px',
                    color: 'rgba(10,15,26,0.9)',
                    fontFamily: '"Denim TRIAL", sans-serif',
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators — Figma: gap 6px, active #DBE5FC 24×4px r-2, inactive rgba(219,229,252,0.25) 10×4px r-999 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          marginTop: '20px',
        }}
      >
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              height: '4px',
              width: i === active ? '24px' : '10px',
              borderRadius: i === active ? '2px' : '999px',
              backgroundColor: i === active ? '#DBE5FC' : 'rgba(219,229,252,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 300ms ease, background-color 300ms ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function SolutionMobile() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % PHRASES.length), 2900)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={{ paddingTop: '64px', paddingBottom: '64px', backgroundColor: '#F5F7FC', overflow: 'hidden' }}>

      {/* Header block — padded */}
      <div style={{ padding: '0 20px' }}>

      {/* Label */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '1.65px',
            textTransform: 'uppercase',
            color: '#2473f2',
          }}
        >
          solution
        </p>
      </div>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          textAlign: 'center',
          marginBottom: '48px',
        }}
      >
        {/* Animated phrase row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              overflow: 'hidden',
              display: 'inline-flex',
              height: '1.15em',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.32px',
              fontFamily: '"Denim TRIAL", sans-serif',
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={idx}
                style={{
                  background: 'linear-gradient(90deg, #1964df 23.97%, #1eb995 78.84%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {PHRASES[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.32px',
              color: 'rgba(10,15,26,0.9)',
              fontFamily: '"Denim TRIAL", sans-serif',
            }}
          >
            —
          </span>
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: 1.15,
            letterSpacing: '-0.32px',
            color: 'rgba(10,15,26,0.9)',
          }}
        >
          One Integrated Platform
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: 1.15,
            letterSpacing: '-0.24px',
            color: 'rgba(10,15,26,0.9)',
          }}
        >
          built for Healthcare, Pharma, and Life Sciences
        </p>
      </div>

      </div>{/* end header block */}

      {/* Card carousel — full bleed, no side padding */}
      <CardCarousel />

    </section>
  )
}
