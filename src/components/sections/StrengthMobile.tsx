// Strength — mobile layout
// Dark bg #0A0F1A, rounded bottom corners
// 3 cards stacked vertically (no absolute positioning)

import Image from 'next/image'

const CARDS = [
  {
    icon: '/icons/icon-team.svg',
    iconAlt: 'Team icon',
    title: 'Why L37',
    body: 'A senior team from healthcare and AI, backed by a global network of technology and robotics partners.',
  },
  {
    icon: '/icons/icon-ai.svg',
    iconAlt: 'AI icon',
    title: 'Built to Earn Your Trust',
    body: 'Deep, dual expertise across Agentic Clinical AI and Physical AI — unified by a knowledge-graph backbone.',
  },
  {
    icon: '/icons/icon-hospital.svg',
    iconAlt: 'Hospital icon',
    title: 'What Sets L37 Apart',
    body: 'Solutions shaped around your workflows and priorities, not off-the-shelf products forced onto your teams.',
  },
]

export default function StrengthMobile() {
  return (
    <section
      style={{
        backgroundColor: '#0A0F1A',
        borderRadius: '0 0 16px 16px',
        padding: '64px 20px',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <p
        style={{
          margin: '0 0 16px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 500,
          fontSize: '11px',
          letterSpacing: '1.65px',
          textTransform: 'uppercase',
          color: '#4c9cff',
          lineHeight: 1.4,
          textAlign: 'center',
        }}
      >
        STRENGTH
      </p>

      {/* Heading */}
      <p
        style={{
          margin: '0 0 48px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: 1.15,
          letterSpacing: '-0.32px',
          color: '#f5f7fc',
          textAlign: 'center',
        }}
      >
        Why Choose L37?
      </p>

      {/* Cards stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 16px' }}>
        {CARDS.map((card) => (
          <div
            key={card.title}
            style={{
              width: '100%',
              borderRadius: '16px',
              padding: '32px',
              backgroundImage: 'linear-gradient(225.621deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Icon — anchored to top */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '6px',
                background: 'rgba(245,247,252,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <Image src={card.icon} alt={card.iconAlt} width={32} height={32} />
            </div>

            {/* Title + body */}
            <div>
              <p
                style={{
                  margin: '0 0 16px',
                  fontFamily: '"Denim TRIAL", sans-serif',
                  fontWeight: 400,
                  fontSize: '28px',
                  lineHeight: 1.25,
                  letterSpacing: '-0.28px',
                  color: '#ffffff',
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Denim TRIAL", sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: 1.5,
                  color: '#dbe5fc',
                }}
              >
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
