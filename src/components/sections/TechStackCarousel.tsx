'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SimulationOverlay from './TechStackCarousel/SimulationOverlay'

type Slide = {
  id: number
  eyebrow: string
  highlight: string
  body: string
  bullets: string[]
  image: string | null
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: 'NVIDIA',
    highlight: 'Omniverse',
    image: '/images/nvidia-omniverse-screen.png',
    body: 'The physics-accurate, real-time simulation universe at the core of every L37 Digital Twin deployment. Omniverse lets L37 build, test, and certify hospital environments before any robot is switched on in the real world.',
    bullets: [
      'Photorealistic, physics-accurate hospital digital twins',
      'Collaborative multi-user simulation — OEMs, architects, clinicians',
      'OpenUSD standard — interoperable with BIM, CAD, and Isaac Sim',
      'Foundation of MedAsset SimReady OEM AI (LOB 10.04.03)',
      'EU AI Act and FDA 2023 simulation guidance compliant',
    ],
  },
  {
    id: 2,
    eyebrow: 'NVIDIA',
    highlight: 'Isaac Sim & Isaac for Healthcare',
    image: '/images/isaac-sim-sl-2.png',
    body: 'The robot training and certification layer. Isaac Sim enables L37\'s SAR, NAR, RAR, and MAR robots to complete thousands of ward navigation and patient interaction scenarios in simulation — before a single deployment in a live paediatric ward.',
    bullets: [
      'Isaac for Healthcare — purpose-built clinical robot simulation',
      'Pre-deployment certification in virtual paediatric ward layouts',
      'Edge-case generation — crowds, children, complex equipment',
      'Synthetic training data for on-robot AI models',
      'Regulatory evidence package (REP) generation for FDA submissions',
    ],
  },
  {
    id: 3,
    eyebrow: 'OpenUSD',
    highlight: '& SimReady Assets',
    image: '/images/openUSD-sl-3.png',
    body: 'Universal Scene Description (USD) is L37\'s standard for all hospital environment modelling. SimReady-certified assets — physically accurate, sensor-interactable 3D objects — allow OEM robot manufacturers to train against real hospital layouts without ever entering the building.',
    bullets: [
      'OpenUSD — industry-standard 3D interchange, Omniverse native',
      'SimReady certification — physics, materials, LiDAR, and camera simulation',
      'Hospital BIM Level of Development (LOD 300–400) integration',
      'Proprietary asset library that grows with every hospital onboarded',
      'OEM licence model — recurring revenue via MedAsset LOB 10.04.03',
    ],
  },
  {
    id: 4,
    eyebrow: 'NVIDIA',
    highlight: 'Thor & Jetson',
    image: '/images/Thor-Jetson-sl-4.png',
    body: 'The onboard brain of every L37 robot. Thor delivers the raw compute for complex real-time clinical decisions — sensor fusion, object recognition, navigation, and ambient AI. Jetson powers the lighter inference tasks across the mobile fleet with industry-leading energy efficiency.',
    bullets: [
      'NVIDIA Thor — next-generation robot SoC, 2,000 TOPS AI performance',
      'NVIDIA Jetson Orin — 275 TOPS, compact form factor for mobile robots',
      'Real-time multi-sensor fusion — vision, audio, LiDAR, force, vitals',
      'On-device inference — zero cloud latency for safety-critical decisions',
      'Deployed across SAR, NAR, RAR, and MAR platforms',
    ],
  },
  {
    id: 5,
    eyebrow: 'NVIDIA',
    highlight: 'RIVA & NeMo Guardrails',
    image: '/images/Riva-sl-5.svg',
    body: 'The voice and safety layer across every L37 deployment. RIVA handles clinical-grade speech recognition and synthesis — powering the MAR\'s ambient scribe, the SAR\'s child-facing voice, and the NAR\'s patient communication. NeMo Guardrails ensures every AI output stays within clinical scope before it reaches a clinician.',
    bullets: [
      'RIVA ASR — multilingual, clinical terminology optimised, streaming',
      'RIVA TTS — natural, age-appropriate voice profiles for paediatric SAR',
      'Ambient transcription → structured EHR field auto-population (MAR)',
      'NeMo Guardrails — blocks unsupported diagnostic claims at inference time',
      'Full audit trail for every AI-generated clinical output',
    ],
  },
  {
    id: 6,
    eyebrow: 'NVIDIA',
    highlight: 'NIM & Nemotron Ultra',
    image: '/images/NIM-sl-6.svg',
    body: 'The clinical intelligence layer. Every L37 Clinical AI product — ambient documentation, diagnostic decision support, DaaS ontology enrichment — runs on NVIDIA NIM microservices with Nemotron Ultra as the primary frontier model. Deployable on-premise inside HIPAA and HDS compliant environments.',
    bullets: [
      'NVIDIA NIM — containerised AI microservices with enterprise SLA',
      'Nemotron Ultra — frontier LLM optimised for clinical reasoning tasks',
      'On-premise deployment — data never leaves the hospital boundary',
      'Sub-500ms inference latency for real-time clinical assistant use cases',
      'Powers MAR scribe, CDSS, DaaS enrichment, and ONaaS (LOBs 10.04–10.05)',
    ],
  },
]

function SlideImage({ src, alt }: { src: string | null; alt: string }) {
  const [errored, setErrored] = useState(false)

  if (src && !errored) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setErrored(true)}
      />
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <span
        className="font-denim font-normal text-center px-[32px] leading-[1.4]"
        style={{ fontSize: '18px', color: 'rgba(219,229,252,0.25)' }}
      >
        {alt}
      </span>
    </div>
  )
}

export default function TechStackCarousel() {
  const [active, setActive] = useState(0)
  const [animated, setAnimated] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number, withAnimation = true) => {
    setAnimated(withAnimation)
    setActive(index)
  }

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(i => {
        if (i >= slides.length - 1) {
          // Jump to first instantly (no backward animation)
          setAnimated(false)
          setTimeout(() => setAnimated(true), 50)
          return 0
        }
        setAnimated(true)
        return i + 1
      })
    }, 4000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const prev = () => { goTo((active - 1 + slides.length) % slides.length); resetTimer() }
  const next = () => { goTo((active + 1) % slides.length); resetTimer() }

  return (
    <div className="mt-[80px]">

      {/* ── Track — gradient fill + inset stroke (strokeAlign: INSIDE) ── */}
      <div
        style={{
          position: 'relative',
          height: '493px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Inset gradient border — stays within 493px bounds */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '16px', padding: '1px', pointerEvents: 'none', zIndex: 10,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }} />
        <div
          className="h-full flex"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${active * (100 / slides.length)}%)`,
            transition: animated ? 'transform 400ms ease' : 'none',
          }}
        >
          {slides.map(slide => (
            <div
              key={slide.id}
              className="h-full flex"
              style={{ width: `${100 / slides.length}%`, flexShrink: 0 }}
              aria-hidden={slide.id - 1 !== active}
            >
              {/* Left: image panel — 16px from slider edges */}
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{
                  width: '49.75%',
                  margin: '16px 0 16px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(10,15,26,0.7)',
                }}
              >
                <SlideImage src={slide.image} alt={slide.highlight} />
              </div>

              {/* Right: text panel — 93px left gap, 69px right padding */}
              <div className="flex-1 flex flex-col justify-center gap-[24px] overflow-hidden"
                style={{ paddingLeft: '93px', paddingRight: '69px' }}
              >

                {/* Heading */}
                <h3 className="font-denim font-normal text-[32px] leading-[1.2]">
                  <span className="text-light-base">{slide.eyebrow} </span>
                  <span className="text-gradient-highlight">{slide.highlight}</span>
                </h3>

                {/* Body */}
                <p className="font-denim font-normal text-[18px] leading-[1.4] text-light-strong">
                  {slide.body}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-[6px]">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-[10px] font-denim font-normal text-[16px] leading-[1.4] text-light-strong">
                      <span className="flex-shrink-0 mt-[1px]" style={{ opacity: 0.5 }}>·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dots + Arrows ── */}
      <div className="relative flex items-center mt-[27px]">

        {/* Dots — centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[8px]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer() }}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300"
              style={{
                height: '4px',
                width: i === active ? '24px' : '10px',
                borderRadius: i === active ? '2px' : '9999px',
                backgroundColor: i === active ? '#DBE5FC' : 'rgba(219,229,252,0.25)',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Arrows — right, 40×40 with inset gradient border */}
        <div className="flex items-center gap-[12px]" style={{ marginLeft: 'auto' }}>
          {([{ label: 'Previous slide', onClick: prev, path: 'M10 12L6 8L10 4' },
             { label: 'Next slide',     onClick: next, path: 'M6 4L10 8L6 12' }] as const).map(({ label, onClick, path }) => (
            <button
              key={label}
              onClick={onClick}
              aria-label={label}
              style={{
                position: 'relative',
                width: '40px', height: '40px',
                borderRadius: '999px',
                border: 'none',
                color: '#F5F7FC',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Inset gradient border */}
              <span style={{
                position: 'absolute', inset: 0, borderRadius: '999px', padding: '1px', pointerEvents: 'none',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }} />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
