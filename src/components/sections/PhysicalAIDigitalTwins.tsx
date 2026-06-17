'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  {
    bold: 'L37 builds a simulation-ready digital twin',
    rest: ' of your hospital, Clinic, etc. — its assets, robots and physical workflows.',
  },
  {
    bold: 'Test, train and validate Physical AI safely',
    rest: ' in the virtual replica before it reaches the floor.',
  },
  {
    bold: 'Then deploy to NVIDIA edge hardware',
    rest: ', with an ontology and knowledge graph keeping the twin and reality continuously in sync.',
  },
]

// Sequential timing (seconds):
// step 0 → 0s | line 0 → 0.4s | step 1 → 0.9s | line 1 → 1.3s | step 2 → 1.8s
const STEP_DUR = 0.4
const LINE_DUR = 0.5

function stepDelay(i: number) {
  return i * (STEP_DUR + LINE_DUR)
}
function lineDelay(i: number) {
  return stepDelay(i) + STEP_DUR
}

export default function PhysicalAIDigitalTwins() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <div ref={ref} className="flex flex-col md:flex-row md:items-start w-full gap-[48px] md:gap-0">
      {/* ── Left: heading + steps ── */}
      <div className="flex flex-col gap-[48px] w-full md:w-[580px] md:flex-shrink-0 md:mr-[169px]">
        {/* Heading */}
        <div
          className="flex flex-col"
          style={{ fontSize: 48, lineHeight: 1.15, letterSpacing: '-0.48px' }}
        >
          <span className="text-[rgba(10,15,26,0.9)]" style={{ fontWeight: 400 }}>
            Simulate and Validate
          </span>
          <span className="text-gradient-highlight" style={{ fontWeight: 500 }}>
            Physical AI in a Digital Twin
          </span>
        </div>

        {/* Steps — dot column + text side by side */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1
            return (
              <div
                key={i}
                style={{ display: 'flex', flexDirection: 'row', gap: 32, alignItems: 'stretch' }}
              >
                {/* Left: dot + connector column */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  {/* Dot — animated in */}
                  <motion.div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(36,115,242,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                    transition={{ duration: STEP_DUR, delay: stepDelay(i), ease: 'easeOut' }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: '#2473f2',
                      }}
                    />
                  </motion.div>

                  {/* Connector — flex:1 fills exactly the space between this dot and the next */}
                  {!isLast && (
                    <motion.div
                      style={{
                        flex: 1,
                        width: 1,
                        minHeight: 32,
                        backgroundImage:
                          'repeating-linear-gradient(to bottom, rgba(36,115,242,0.5) 0px, rgba(36,115,242,0.5) 3px, transparent 3px, transparent 6px)',
                        backgroundSize: '1px 6px',
                        backgroundRepeat: 'repeat-y',
                      }}
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: LINE_DUR, delay: lineDelay(i), ease: 'linear' }}
                    />
                  )}
                </div>

                {/* Right: step text — padded bottom to match connector length */}
                <motion.div
                  style={{ paddingBottom: isLast ? 0 : 32, paddingTop: 6 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: STEP_DUR, delay: stepDelay(i), ease: 'easeOut' }}
                >
                  <p
                    className="text-[rgba(10,15,26,0.8)]"
                    style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.4 }}
                  >
                    <strong className="text-[#0a0f1a]" style={{ fontWeight: 500 }}>
                      {step.bold}
                    </strong>
                    {step.rest}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Right: photo ── */}
      <Image
        src="/images/digital-twin.png"
        alt="Digital Twin simulation"
        width={600}
        height={450}
        sizes="(max-width: 768px) 100vw, 600px"
        className="w-full h-auto md:w-[600px] md:h-[450px] md:flex-shrink-0 rounded-[16px] object-cover"
      />
    </div>
  )
}
