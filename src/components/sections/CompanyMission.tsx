'use client'

import { motion } from 'framer-motion'

// Mission section — gradient bg, centered large italic quote
// Background: linear-gradient(162.727deg, #D6E5FF 0%, #E8F5EF 100%)
// Label: "OUR MISSION" (blue, 11px)
// Quote: 56px gradient text (blue → teal)

const LINES = [
  'To evolve healthcare through adaptive, intelligent systems that learn and',
  'improve alongside the people they serve.',
]

const gradientStyle = {
  backgroundImage: 'linear-gradient(89deg, #1964df 24%, #1eb995 79%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

export default function CompanyMission() {
  return (
    <div className="px-[16px] py-[0px] md:py-[0px]">
      <section
        className="relative rounded-[24px] overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(162.727deg, rgb(214, 229, 255) 0%, rgb(232, 245, 239) 100%)',
          minHeight: 420,
          padding: '80px 24px',
        }}
      >
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[980px]">

          {/* Label */}
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-[#4c9cff] text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
              OUR MISSION
            </p>
          </div>

          {/* Quote — gradient text, animated line by line */}
          <p
            className="font-denim font-normal leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              letterSpacing: '-0.56px',
            }}
          >
            {LINES.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                style={gradientStyle}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              >
                {line}
              </motion.span>
            ))}
          </p>

        </div>
      </section>
    </div>
  )
}
