'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

function Label({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center px-[6px] py-[4px] bg-primary-base text-light-base font-denim font-medium text-[11px] uppercase tracking-[0.55px] leading-[1.4] rounded-[3px]">
      {text}
    </span>
  )
}

const partners = [
  {
    logo: '/images/partner-rweality.png',
    name: 'Rweality',
    description: 'Consulting services company specialized Real-World Evidence (RWE), Health Economics and Outcomes Research (HEOR)',
    areas: [
      'RWE & HEOR studies for market access, pricing, patient journey, and rare diseases.',
      'Expert & HCP management for scientific and strategic boards.',
      'Dashboard: Automated insights on drug development, market trends & opportunities.',
    ],
  },
  {
    logo: '/images/partner-horiana.png',
    name: 'Horiana',
    description: 'Consulting services company dedicated to epidemiology, biostatistics and clinical research, designing and conducting Real-World Studies.',
    areas: [
      'RWE & HEOR studies for market access, pricing, patient journey, and rare diseases.',
      'Expert & HCP management for scientific and strategic boards.',
      'Dashboard: Automated insights on drug development, market trends & opportunities.',
    ],
  },
  {
    logo: '/images/partner-pass.png',
    name: 'PASS',
    description: 'Company specializes in organizing virtual healthcare congresses, data providing',
    areas: [
      'RWE & HEOR studies for market access, pricing, patient journey, and rare diseases.',
      'Expert & HCP management for scientific and strategic boards.',
      'Dashboard: Automated insights on drug development, market trends & opportunities.',
    ],
  },
  {
    logo: '/images/partner-talos.png',
    name: 'Talos',
    description: 'Consulting services company specializing in patient access, and pricing',
    areas: [
      'RWE & HEOR studies for market access, pricing, patient journey, and rare diseases.',
      'Expert & HCP management for scientific and strategic boards.',
      'Dashboard: Automated insights on drug development, market trends & opportunities.',
    ],
  },
]

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="rounded-[16px] bg-white p-[48px] flex flex-col justify-between cursor-pointer hover:shadow-card-partner transition-shadow duration-300 w-full"
      style={{
        height: '387px',
        boxShadow: '0px 40px 48px -8px rgba(0, 11, 223, 0.06)',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Лого — зверху */}
      <div className="relative h-[62px] w-[200px]">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Текст + кнопка — знизу */}
      <div className="flex flex-col gap-[24px]">
        {!expanded ? (
          <p className="font-denim font-normal text-[20px] leading-[1.4] text-navy-base">
            {partner.description}
          </p>
        ) : (
          <div className="flex flex-col gap-[12px]">
            <p className="font-denim font-normal text-[18px] leading-[1.4] text-navy-base">
              Areas of collaboration:
            </p>
            <ul className="flex flex-col gap-[8px]">
              {partner.areas.map((area, i) => (
                <li key={i} className="flex gap-[8px] items-start">
                  <span className="mt-[10px] w-[4px] h-[4px] rounded-full bg-navy-base shrink-0" />
                  <span className="font-denim font-normal text-[18px] leading-[1.4] text-navy-base">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end">
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded) }}
            className="w-[32px] h-[32px] rounded-full border border-navy-base flex items-center justify-center hover:bg-navy-base hover:text-light-base transition-colors text-navy-base"
          >
            {expanded ? (
              <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                <path d="M1 1H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const total = partners.length

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // offsetWidth viewport = батьківський контент + 40px (padding 20px з кожного боку)
        // Контентна ширина viewport (де живуть картки) = offsetWidth - 40
        const contentWidth = containerRef.current.offsetWidth - 40
        setCardWidth((contentWidth - 24) / 2)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const slideTo = (newIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goNext = () => { if (currentIndex + 2 < total) slideTo(currentIndex + 1) }
  const goPrev = () => { if (currentIndex > 0) slideTo(currentIndex - 1) }

  return (
    <section
      id="partners"
      className="mx-[16px] rounded-[24px] pt-[140px] pb-[80px]"
      style={{ backgroundColor: '#F5F7FC' }}
    >

      {/* Заголовок */}
      <div className="flex flex-col items-center gap-[16px] mb-[64px]">
        <Label text="partners" />
        <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-navy-base text-center max-w-[600px]">
          Strategic Partnerships to Drive Growth
        </h2>
      </div>

      {/* Карусель */}
      <div className="relative px-[64px]">

        {/* Viewport — padding trick: 20px з боків і зверху, 90px знизу для тіні карток */}
        <div
          ref={containerRef}
          style={{
            margin: '-20px -20px -90px -20px',
            padding: '20px 20px 90px 20px',
            overflow: 'hidden',
          }}
        >
          {/* Track */}
          <div
            className="flex gap-[24px]"
            style={{
              transform: `translateX(calc(-${currentIndex} * ${cardWidth + 24}px))`,
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                style={{ flex: `0 0 ${cardWidth}px`, width: `${cardWidth}px` }}
              >
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка ← */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-[64px] top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] rounded-full bg-navy-base flex items-center justify-center hover:bg-primary-base transition-colors"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7L7 13" stroke="#F5F7FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Кнопка → */}
        {currentIndex + 2 < total && (
          <button
            onClick={goNext}
            className="absolute right-[48px] top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] rounded-full bg-navy-base flex items-center justify-center hover:bg-primary-base transition-colors"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="#F5F7FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

      </div>

    </section>
  )
}
