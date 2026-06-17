'use client'

import { useState } from 'react'
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
    body: 'The physics-accurate simulation universe at the core of every L37 digital twin. Omniverse lets L37 build, test and certify hospital environments before any robot is switched on in the real world.',
    bullets: [
      'Photorealistic, physics-accurate hospital digital twins',
      'Real-time, collaborative multi-user simulation',
      'OpenUSD foundation — interoperable with BIM and CAD',
      'Twin stays synced with the live facility',
      'The validation environment for every L37 deployment',
    ],
  },
  {
    id: 2,
    eyebrow: 'NVIDIA',
    highlight: 'Isaac Sim & Isaac for Healthcare',
    image: '/images/isaac-sim-sl-2.png',
    body: 'Isaac is where L37 trains and validates robot behaviour. Every nurse, social and rehabilitation robot is rehearsed against thousands of simulated clinical scenarios before it ever reaches a ward.',
    bullets: [
      'Train and test robot policies in simulation, not on patients',
      'Healthcare-specific perception, navigation and manipulation',
      'Synthetic data for rare clinical edge cases',
      'Hardware-in-the-loop validation before deployment',
      'Robot actions mapped to the clinical ontology',
    ],
  },
  {
    id: 3,
    eyebrow: 'OpenUSD',
    highlight: '& SimReady Assets',
    image: '/images/openUSD-sl-3.png',
    body: 'OpenUSD is the open standard behind every L37 asset. Medical equipment becomes a SimReady digital object — physically accurate, sensor-aware and ready to drop into any simulation.',
    bullets: [
      'CAD converted into certified, physics-accurate USD assets',
      'SimReady objects: physics-enabled and sensor-interactable',
      'Interoperable across BIM, CAD and simulation tools',
      'Foundation of the MedAsset OEM catalogue',
      'Reusable across every twin and robot deployment',
    ],
  },
  {
    id: 4,
    eyebrow: 'NVIDIA',
    highlight: 'Thor & Jetson',
    image: '/images/Thor-Jetson-sl-4.png',
    body: 'Thor and Jetson are where validated AI runs in the real world. L37 deploys models to clinical-grade edge hardware, so inference happens at the bedside with low latency and no cloud dependency.',
    bullets: [
      'On-device inference at the point of care',
      'Low-latency, real-time robot decision-making',
      'Runs without continuous cloud connectivity',
      'Clinical-grade, power-efficient edge compute',
      'The same models validated in simulation, deployed to the floor',
    ],
  },
  {
    id: 5,
    eyebrow: 'NVIDIA',
    highlight: 'RIVA & NeMo Guardrails',
    image: '/images/Riva-sl-5.svg',
    body: 'RIVA gives L37 robots clinical-grade voice; NeMo Guardrails keeps it safe. Together they let robots listen, reason and speak — bounded to clinical scope and auditable end to end.',
    bullets: [
      'Clinical-grade speech recognition and synthesis',
      'Guardrails enforce clinical scope and filter intent',
      'Output gating blocks unsafe or off-scope responses',
      'Shared across nurse, social and MD-assisting robots',
      'Every interaction logged for audit and consent',
    ],
  },
  {
    id: 6,
    eyebrow: 'NVIDIA',
    highlight: 'NIM & Nemotron Ultra',
    image: '/images/NIM-sl-6.svg',
    body: "NIM and Nemotron Ultra are L37's reasoning layer. Optimised inference microservices ground every agentic decision in real-world data and the clinical knowledge graph.",
    bullets: [
      'Optimised LLM inference for low-latency reasoning',
      'Retrieval-augmented generation over clinical context',
      'Agentic pipelines grounded in the knowledge graph',
      'Explainable, auditable decisions by design',
      'Reused across Clinical AI and Physical AI',
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

  const goTo = (index: number, withAnimation = true) => {
    setAnimated(withAnimation)
    setActive(index)
  }

  const prev = () => { goTo((active - 1 + slides.length) % slides.length) }
  const next = () => { goTo((active + 1) % slides.length) }

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
              onClick={() => { goTo(i) }}
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
