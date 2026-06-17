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
    bold: 'Then move from validation to the clinical floor,',
    rest: ' deploying safely into real patient care with twin and reality continuously in sync.',
  },
]

const STEP_DUR = 0.4
const LINE_DUR = 0.5

function stepDelay(i: number) { return i * (STEP_DUR + LINE_DUR) }
function lineDelay(i: number) { return stepDelay(i) + STEP_DUR }

export default function PhysicalAIDigitalTwinsMobile() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section ref={ref} style={{ padding: '64px 20px', backgroundColor: '#F5F7FC' }}>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '40px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontSize: '36px',
          lineHeight: 1.15,
          letterSpacing: '-0.36px',
        }}
      >
        <span style={{ fontWeight: 400, color: 'rgba(10,15,26,0.9)' }}>
          Simulate and Validate
        </span>
        <span
          style={{
            fontWeight: 500,
            background: 'linear-gradient(90deg, #1964df 23.97%, #1eb995 78.84%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Physical AI in a Digital Twin
        </span>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {STEPS.map((step, i) => {
          const isLast = i === STEPS.length - 1
          return (
            <div
              key={i}
              style={{ display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'stretch' }}
            >
              {/* Dot + connector */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <motion.div
                  style={{
                    width: 28,
                    height: 28,
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
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2473f2' }} />
                </motion.div>
                {!isLast && (
                  <motion.div
                    style={{
                      flex: 1,
                      width: 1,
                      minHeight: 28,
                      backgroundImage:
                        'repeating-linear-gradient(to bottom, rgba(36,115,242,0.5) 0px, rgba(36,115,242,0.5) 3px, transparent 3px, transparent 6px)',
                      backgroundSize: '1px 6px',
                      backgroundRepeat: 'repeat-y',
                    }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: LINE_DUR, delay: lineDelay(i), ease: 'linear' }}
                  />
                )}
              </div>

              {/* Text */}
              <motion.div
                style={{ paddingBottom: isLast ? 0 : 28, paddingTop: 4 }}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: STEP_DUR, delay: stepDelay(i), ease: 'easeOut' }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: '"Denim TRIAL", sans-serif',
                    fontSize: '17px',
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: 'rgba(10,15,26,0.8)',
                  }}
                >
                  <strong style={{ fontWeight: 500, color: '#0a0f1a' }}>{step.bold}</strong>
                  {step.rest}
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Image */}
      <Image
        src="/images/digital-twin.png"
        alt="Digital Twin simulation"
        width={600}
        height={450}
        sizes="100vw"
        style={{ marginTop: '40px', borderRadius: '16px', width: '100%', height: 'auto' }}
      />

    </section>
  )
}
