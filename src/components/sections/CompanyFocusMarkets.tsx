'use client'

import { motion } from 'framer-motion'

// Focus Markets — Figma node 13809:14330
// Background: radial gradient overlay + #141b29
// Top row: label+heading LEFT (550px) ↔ body RIGHT (550px), gap=100px, items-end
// "Start narrow." — gradient colored; "Earn the right to expand." — white
// Market cards: glassmorphism border, flex-col gap-40, p-40, rounded-16
//   Stage: 12px dot + 18px label (same color as dot)
//   Market name: 24px white
// Footer: 20px #dbe5fc centered

const MARKETS = [
  {
    stage: 'START',
    dotColor: '#a7c7fa',
    labelColor: '#a7c7fa',
    title: 'Pediatrics',
  },
  {
    stage: 'FOCUS',
    dotColor: '#2473f2',
    labelColor: '#2473f2',
    title: 'Rare diseases',
  },
  {
    stage: 'EXPAND',
    dotColor: '#049f85',
    labelColor: '#049f85',
    title: 'Cardiology · Long-term care · Oncology',
  },
]

export default function CompanyFocusMarkets() {
  return (
    <section
      className="relative py-[80px] md:py-[140px] px-[20px] md:px-[16px] overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 70% at 50% -10%, rgba(94,176,255,0.25) 0%, rgba(20,27,41,0) 70%),
          #141b29
        `,
        borderRadius: '24px 24px 0 0',
      }}
    >
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[80px]">

        {/* Top row — label+heading LEFT, body RIGHT */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-[32px] md:gap-[100px]">

          {/* Left: label + heading */}
          <div className="flex flex-col gap-[24px] shrink-0 md:w-[550px]">
            <div className="px-[8px] py-[4px] rounded-[3px]">
              <p className="font-denim font-medium text-[#4c9cff] text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
                FOCUS &amp; MARKETS
              </p>
            </div>
            <h2
              className="font-denim font-normal"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
            >
              {/* "Start narrow." — gradient text */}
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(89deg, #3683ff 0%, #70e397 98%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Start narrow.
              </span>
              {/* "Earn the right to expand." — white */}
              <span className="block" style={{ color: '#f5f7fc' }}>
                Earn the right to expand.
              </span>
            </h2>
          </div>

          {/* Right: body text */}
          <p
            className="font-denim font-normal leading-[1.4] shrink-0 md:w-[550px]"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)', color: '#dbe5fc' }}
          >
            We begin where the need is sharpest and the bar is highest: pediatrics, and within it, rare disease. Once the team, processes and technology are proven, we expand into adjacent areas including cardiology, long-term care and beyond.
          </p>
        </div>

        {/* Market cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {MARKETS.map((market, i) => (
            <motion.div
              key={market.stage}
              className="flex flex-col gap-[40px] justify-center items-start p-[40px] rounded-[16px]"
              style={{
                background: 'linear-gradient(205.726deg, rgba(255,255,255,0.05) 1.6%, rgba(255,255,255,0.02) 98.4%)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            >
              {/* Stage dot + label */}
              <div className="flex items-center gap-[16px]">
                <div
                  className="rounded-full shrink-0"
                  style={{ width: 12, height: 12, backgroundColor: market.dotColor }}
                />
                <span
                  className="font-denim font-normal leading-[1.4] tracking-[0.36px] whitespace-nowrap"
                  style={{ fontSize: 18, color: market.labelColor }}
                >
                  {market.stage}
                </span>
              </div>

              {/* Market title */}
              <p
                className="font-denim font-normal text-white leading-[1.25]"
                style={{ fontSize: 24 }}
              >
                {market.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note — centered */}
        <p
          className="font-denim font-normal text-center leading-[1.4] w-full"
          style={{ fontSize: 20, color: '#dbe5fc' }}
        >
          Primary market: United States, then Europe, then Asia Pacific.
        </p>

      </div>
    </section>
  )
}
