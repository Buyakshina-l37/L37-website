'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PHRASES = ['Clinical AI', 'Agentic AI', 'Physical AI']

// ── All 8 cards from Figma: Desktop Pages → Solution-cards ──────────────────
const CARDS = [
  {
    num: '/01',
    title: 'Agentic AI for Healthcare',
    body: 'Operational twins of hospital assets, robots and care pathways — one continuous model linking physical operations to clinical outcomes.',
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

// Figma: linear-gradient(132.406deg, …)
const CARD_BG = 'linear-gradient(132.406deg, rgb(214,229,255) 0%, rgb(232,245,239) 100%)'

// Scroll amount per button click = one card width + gap
const SCROLL_STEP = 411 + 24 // 435 px

export default function SolutionSection() {
  const [idx, setIdx] = useState(0)
  const [canLeft, setCanLeft]   = useState(false)
  const [canRight, setCanRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  // ── Slot-machine timer ───────────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % PHRASES.length), 2900)
    return () => clearInterval(id)
  }, [])

  // ── Track scroll position to show/hide nav buttons ───────────────────────
  const syncScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const atStart = el.scrollLeft <= 1
    const atEnd   = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1
    setCanLeft(!atStart)
    setCanRight(!atEnd)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', syncScrollState, { passive: true })
    // initialise on mount
    syncScrollState()
    return () => el.removeEventListener('scroll', syncScrollState)
  }, [syncScrollState])

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  SCROLL_STEP, behavior: 'smooth' })

  return (
    // Fix 4: max-width 1350px centred (matches Figma solution frame width)
    <div className="flex flex-col items-center gap-[80px] w-full mx-auto" style={{ maxWidth: 1350 }}>

      {/* ── Heading block — Figma: w-[969px] flex-col gap-[24px] items-center ── */}
      <div className="flex flex-col items-center gap-[24px]" style={{ width: 969 }}>

        {/* Label */}
        <div className="px-[8px] py-[4px]" style={{ borderRadius: 2.743 }}>
          <p
            className="text-[#2473f2] uppercase whitespace-nowrap leading-[1.4]"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: '1.65px' }}
          >
            solution
          </p>
        </div>

        {/* Title */}
        <h1 className="flex flex-col items-center gap-[4px] text-center whitespace-nowrap">
          {/* Row 1 — 56 px */}
          <span
            className="flex items-start justify-center gap-[16px] whitespace-nowrap"
            style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.56px' }}
          >
            <span className="inline-flex overflow-hidden" style={{ height: '1.15em' }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={idx}
                  className="text-gradient-highlight inline-block"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {PHRASES[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-[rgba(10,15,26,0.9)]">—</span>
            <span className="text-[rgba(10,15,26,0.9)]">One Integrated Platform&nbsp;</span>
          </span>

          {/* Row 2 — 44 px */}
          <span
            className="text-[rgba(10,15,26,0.9)]"
            style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.44px' }}
          >
            built for Healthcare, Pharma, and Life Sciences
          </span>
        </h1>
      </div>

      {/* ── Cards carousel ─────────────────────────────────────────────────── */}
      {/* position:relative so absolutely-placed nav buttons can anchor to this wrapper */}
      <div className="relative w-full">

        {/* Scrollable track — native overflow-x scroll */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto"
          style={{ height: 450, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide WebKit scrollbar */}
          <style>{`.sol-scroll::-webkit-scrollbar{display:none}`}</style>

          {/* Inner row — absolute so cards don't wrap */}
          <div className="flex gap-[24px] items-center h-full" style={{ width: 'max-content' }}>
            {CARDS.map((card) => (
              <div
                key={card.num}
                className="relative flex-shrink-0 rounded-[16px] overflow-hidden"
                style={{ width: 411, height: 450, backgroundImage: CARD_BG }}
              >
                {/* Number — right edge at 363px = 48px from right of 411px card */}
                <p
                  className="absolute text-[#0a0f1a] opacity-30 text-right whitespace-nowrap"
                  style={{
                    top: 48,
                    left: 363,
                    transform: 'translateX(-100%)',
                    fontSize: 24,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    letterSpacing: '-0.24px',
                  }}
                >
                  {card.num}
                </p>

                {/* Content — Figma: absolute left-[48px] top-[115px] w-[315px] h-[287px] */}
                <div
                  className="absolute flex flex-col justify-between"
                  style={{ left: 48, top: 115, width: 315, height: 287 }}
                >
                  <p
                    className="text-[#0a0f1a] w-full"
                    style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.36px' }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[rgba(10,15,26,0.9)] w-full"
                    style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.4 }}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT button — absolutely positioned on left edge, vertically centred */}
        <NavButton
          direction="left"
          onClick={scrollLeft}
          visible={canLeft}
          aria-label="Previous cards"
        />

        {/* RIGHT button — absolutely positioned on right edge, vertically centred */}
        <NavButton
          direction="right"
          onClick={scrollRight}
          visible={canRight}
          aria-label="Next cards"
        />
      </div>

    </div>
  )
}

// ── Nav button — Figma Button-round (Forward, Light theme) ───────────────────
// Size: 32×32px circle, bg #0a0f1a filled, white navigate.forward.svg icon 16×16
// Positioned absolutely on left/right edges of the carousel, vertically centred
// Left button uses the same icon rotated 180deg
function NavButton({
  direction,
  onClick,
  visible,
  'aria-label': ariaLabel,
}: {
  direction: 'left' | 'right'
  onClick: () => void
  visible: boolean
  'aria-label': string
}) {
  const isLeft = direction === 'left'

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-hidden={!visible}
      style={{
        position: 'absolute',
        top: '50%',
        // half the button width (16px) so button sits on the card edge
        ...(isLeft ? { left: -16 } : { right: -16 }),
        transform: 'translateY(-50%)',
        width: 32,
        height: 32,
        borderRadius: '100px',
        background: '#0a0f1a',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 200ms ease, background 150ms ease',
        zIndex: 10,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2473f2' }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#0a0f1a' }}
    >
      {/* navigate.forward.svg — rotated 180deg for left button */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/navigate.forward.svg"
        alt=""
        width={16}
        height={16}
        style={{
          transform: isLeft ? 'rotate(180deg)' : undefined,
          display: 'block',
          filter: 'brightness(0) invert(1)',
        }}
      />
    </button>
  )
}
