'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ── Slide data (mirrors desktop TechStackCarousel) ──────────────
const slides = [
  {
    id: 1,
    eyebrow: 'NVIDIA',
    highlight: 'Omniverse',
    image: '/images/nvidia-omniverse-screen.png',
    body: 'The physics-accurate, real-time simulation universe at the core of every L37 Digital Twin deployment. Omniverse lets L37 build, test, and certify hospital environments before any robot is switched on in the real world.',
  },
  {
    id: 2,
    eyebrow: 'NVIDIA',
    highlight: 'Isaac Sim & Isaac for Healthcare',
    image: '/images/isaac-sim-sl-2.png',
    body: "The robot training and certification layer. Isaac Sim enables L37's SAR, NAR, RAR, and MAR robots to complete thousands of ward navigation and patient interaction scenarios in simulation — before a single deployment in a live paediatric ward.",
  },
  {
    id: 3,
    eyebrow: 'OpenUSD',
    highlight: '& SimReady Assets',
    image: '/images/openUSD-sl-3.png',
    body: "Universal Scene Description (USD) is L37's standard for all hospital environment modelling. SimReady-certified assets — physically accurate, sensor-interactable 3D objects — allow OEM robot manufacturers to train against real hospital layouts without ever entering the building.",
  },
  {
    id: 4,
    eyebrow: 'NVIDIA',
    highlight: 'Thor & Jetson',
    image: '/images/Thor-Jetson-sl-4.png',
    body: "The onboard brain of every L37 robot. Thor delivers the raw compute for complex real-time clinical decisions — sensor fusion, object recognition, navigation, and ambient AI. Jetson powers the lighter inference tasks across the mobile fleet with industry-leading energy efficiency.",
  },
  {
    id: 5,
    eyebrow: 'NVIDIA',
    highlight: 'RIVA & NeMo Guardrails',
    image: '/images/Riva-sl-5.svg',
    body: "The voice and safety layer across every L37 deployment. RIVA handles clinical-grade speech recognition and synthesis — powering the MAR's ambient scribe, the SAR's child-facing voice, and the NAR's patient communication. NeMo Guardrails ensures every AI output stays within clinical scope before it reaches a clinician.",
  },
  {
    id: 6,
    eyebrow: 'NVIDIA',
    highlight: 'NIM & Nemotron Ultra',
    image: '/images/NIM-sl-6.svg',
    body: 'The clinical intelligence layer. Every L37 Clinical AI product — ambient documentation, diagnostic decision support, DaaS ontology enrichment — runs on NVIDIA NIM microservices with Nemotron Ultra as the primary frontier model. Deployable on-premise inside HIPAA and HDS compliant environments.',
  },
]

// ── Swipeable card carousel ──────────────────────────────────────
function MobileSlider() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchCurrentX = useRef<number>(0)
  const isDragging = useRef(false)

  const CARD_WIDTH = 340
  const PEEK_OFFSET = 15 // card starts at calc(50% - 15px) so next card peeks

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
    if (delta > 50 && active < slides.length - 1) {
      setActive(i => i + 1)
    } else if (delta < -50 && active > 0) {
      setActive(i => i - 1)
    }
  }

  return (
    <div>
      {/* Slider track */}
      <div
        style={{ overflow: 'hidden', width: '100%' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            transition: 'transform 350ms ease',
            transform: `translateX(calc(50% - ${PEEK_OFFSET}px - ${CARD_WIDTH / 2}px - ${active * (CARD_WIDTH + 12)}px))`,
            gap: '12px',
            willChange: 'transform',
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              style={{
                flexShrink: 0,
                width: `${CARD_WIDTH}px`,
                height: '514px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'linear-gradient(236.5deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                overflow: 'hidden',
                position: 'relative',
                opacity: i === active ? 1 : 0.5,
                transition: 'opacity 350ms ease',
              }}
            >
              {/* Image area */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '16px',
                  width: '308px',
                  height: '237px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(10,15,26,0.7)',
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.highlight}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="308px"
                />
              </div>

              {/* Text area */}
              <div
                style={{
                  position: 'absolute',
                  top: '268px',
                  left: '15px',
                  width: '308px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {/* Title */}
                <p
                  style={{
                    margin: 0,
                    fontFamily: '"Denim TRIAL", sans-serif',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: 1.2,
                    color: '#ffffff',
                  }}
                >
                  <span>{slide.eyebrow} </span>
                  <span
                    style={{
                      background: 'linear-gradient(89.3deg, rgb(161,255,182) 0%, rgb(44,138,255) 98%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {slide.highlight}
                  </span>
                </p>

                {/* Body */}
                <p
                  style={{
                    margin: 0,
                    fontFamily: '"Denim TRIAL", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: 1.4,
                    letterSpacing: '0.16px',
                    color: '#DBE5FC',
                  }}
                >
                  {slide.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px',
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: '4px',
              width: i === active ? '24px' : '10px',
              borderRadius: i === active ? '2px' : '999px',
              backgroundColor: i === active ? '#DBE5FC' : 'rgba(219,229,252,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 300ms ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Main export ──────────────────────────────────────────────────
export default function TechStackMobile() {
  return (
    <section
      style={{
        backgroundColor: '#0A0F1A',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
        paddingBottom: '60px',
      }}
    >

      {/* ── Zone 1: Intro block ── */}
      <div style={{ padding: '60px 20px 48px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>

        <span style={{ fontFamily: '"Denim TRIAL"', fontWeight: 500, fontSize: '11px',
          letterSpacing: '1.65px', textTransform: 'uppercase', color: '#4C9CFF',
          lineHeight: 1.4 }}>
          Engineered for Healthcare
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Denim TRIAL"', fontWeight: 400, fontSize: '36px',
            lineHeight: 1.15, letterSpacing: '-0.36px', margin: 0,
            background: 'linear-gradient(90deg, #1964df 23.97%, #1eb995 78.84%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text' }}>
            The Intelligence Layer
          </h2>
          <p style={{ fontFamily: '"Denim TRIAL"', fontWeight: 400, fontSize: '36px',
            lineHeight: 1.15, letterSpacing: '-0.36px', color: '#F5F7FC', margin: 0 }}>
            at the core of every L37 deployment
          </p>
        </div>

        <p style={{ fontFamily: '"Denim TRIAL"', fontWeight: 400, fontSize: '18px',
          lineHeight: 1.4, textAlign: 'center', color: '#DBE5FC', margin: 0 }}>
          Every L37 deployment is built on a shared knowledge graph and clinical-operational
          ontology — connecting real-world data, digital twins and robot actions. Proven NVIDIA
          infrastructure provides the simulation and edge compute beneath it, certified for
          demanding clinical environments.
        </p>

        <Link href="/contact" style={{ display: 'flex', alignItems: 'center',
          justifyContent: 'center', width: '100%', height: '56px',
          borderRadius: '16px', backgroundColor: '#F5F7FC', color: '#0A0F1A',
          fontFamily: '"Denim TRIAL"', fontWeight: 500, fontSize: '16px',
          textDecoration: 'none' }}>
          Request a technology briefing
        </Link>
      </div>

      {/* ── 2. Orbit rings — static ── */}
      <div
        style={{
          width: '390px',
          height: '390px',
          overflow: 'hidden',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/orbit-rings-mobile.svg"
          alt="NVIDIA technology orbit"
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </div>

      {/* ── 2. Text block ── */}
      <div
        style={{
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
          marginTop: '32px',
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '1.65px',
            textTransform: 'uppercase',
            color: '#4C9CFF',
          }}
        >
          Simulation to Deployment
        </span>

        {/* Heading */}
        <h3
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: 1.15,
            letterSpacing: '-0.32px',
            color: '#F5F7FC',
          }}
        >
          One Platform, from virtual replica to the clinical floor
        </h3>

        {/* Body */}
        <p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.4,
            color: '#DBE5FC',
          }}
        >
          No mixed vendors. No architectural compromises. L37 runs end-to-end on NVIDIA
          infrastructure — the only healthcare AI company to deploy Omniverse, Isaac, NIM,
          RIVA, Thor, and Jetson in a single unified clinical stack.
        </p>
      </div>

      {/* ── 3. Swipeable slider ── */}
      <div style={{ marginTop: '40px' }}>
        <MobileSlider />
      </div>

    </section>
  )
}
