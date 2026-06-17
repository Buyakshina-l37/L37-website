import Image from 'next/image'
import Link from 'next/link'
import TechStackCarousel from './TechStackCarousel'

const ORBIT_SIZE = 680

export default function TechStack() {
  return (
    <section
      className="mx-[16px] overflow-hidden"
      style={{ backgroundColor: '#0A0F1A', borderRadius: '0 0 16px 16px' }}
    >
      {/* ── Zone 1: Hero — left text + right orbit-rings ── */}
      <div className="max-w-[1608px] mx-auto px-[120px] pt-[140px] pb-0 relative">
        <div className="flex items-start justify-between gap-[40px]">

          {/* Left: label + title + body + button */}
          <div className="flex flex-col gap-[32px] max-w-[545px] pt-[80px]">

            {/* Label */}
            <span className="font-denim font-medium text-[11px] uppercase tracking-[3px] leading-[1.4]" style={{ color: '#4C9CFF' }}>
              Engineered for Healthcare
            </span>

            {/* Title — gradient line + sub-line */}
            <div className="flex flex-col gap-0">
              <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-gradient-highlight">
                The Intelligence Layer
              </h2>
              <p className="font-denim font-normal text-[48px] leading-[1.15] text-light-base">
                at the core of every L37 deployment
              </p>
            </div>

            {/* Body */}
            <p className="font-denim font-normal text-[18px] leading-[1.4] text-light-strong">
              Every L37 deployment is built on a shared knowledge graph and clinical-operational
              ontology — connecting real-world data, digital twins and robot actions. Proven NVIDIA
              infrastructure provides the simulation and edge compute beneath it, certified for
              demanding clinical environments.
            </p>

            {/* CTA button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-fit px-[32px] font-denim font-medium text-[16px] leading-[1.25] text-navy-base bg-light-base rounded-[16px] hover:opacity-90 transition-opacity"
              style={{ height: '56px' }}
            >
              Request a technology briefing
            </Link>
          </div>

          {/* Right: orbit-rings SVG + floating chip labels */}
          <div
            className="relative flex-shrink-0"
            style={{ width: ORBIT_SIZE, height: ORBIT_SIZE }}
          >
            {/* Glow behind rings */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(36,115,242,0.18) 0%, transparent 70%)',
              }}
            />

            <Image
              src="/images/orbit-rings.svg"
              alt="NVIDIA technology orbit"
              width={ORBIT_SIZE}
              height={ORBIT_SIZE}
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* ── Zone 2: Lower text block + carousel ── */}
      <div className="max-w-[1608px] mx-auto px-[120px] pt-[80px] pb-[80px]">
        <div className="flex flex-col items-center gap-[24px] text-center mx-auto" style={{ maxWidth: 'none' }}>

          {/* Label */}
          <span className="font-denim font-medium text-[11px] uppercase tracking-[3px] leading-[1.4]" style={{ color: '#4C9CFF' }}>
            Simulation to Deployment
          </span>

          {/* Title — 36px, single line on desktop */}
          <h3
            className="font-denim font-normal leading-[1.15] tracking-[-0.36px] text-light-base whitespace-nowrap"
            style={{ fontSize: 36, width: '100%', maxWidth: 'none' }}
          >
            One Platform, from virtual replica to the clinical floor
          </h3>

          {/* Body */}
          <p className="font-denim font-normal text-[18px] leading-[1.4] text-light-strong">
            No mixed vendors. No architectural compromises. L37 runs end-to-end on NVIDIA
            infrastructure — the only healthcare AI company to deploy Omniverse, Isaac, NIM,
            RIVA, Thor, and Jetson in a single unified clinical stack.
          </p>
        </div>

        {/* Carousel */}
        <TechStackCarousel />
      </div>

    </section>
  )
}
