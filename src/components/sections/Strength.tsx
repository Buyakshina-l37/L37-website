// Figma: 13718:11124 — "strength" frame, 1608×812px
// Dark bg (#0A0F1A), rounded-bl-[16px] rounded-br-[16px]
// Inner content: max-w-[1281px] centred, flex-col gap-[80px], pt-[70px] pb-[80px]

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

const CARD_BG = 'linear-gradient(225.621deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'

export default function Strength() {
  return (
    <div
      className="w-full overflow-hidden rounded-bl-[16px] rounded-br-[16px]"
      style={{ backgroundColor: '#0A0F1A' }}
    >
      {/* Inner content — max 1281px centred */}
      <div
        className="flex flex-col items-center gap-[80px] mx-auto"
        style={{ maxWidth: 1281, paddingTop: 70, paddingBottom: 80 }}
      >
        {/* Heading block */}
        <div className="flex flex-col items-center gap-[24px]" style={{ width: 954 }}>
          <div className="px-[8px] py-[4px]" style={{ borderRadius: 2.743 }}>
            <p
              className="uppercase whitespace-nowrap leading-[1.4]"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: '1.65px', color: '#4c9cff' }}
            >
              STRENGTH
            </p>
          </div>
          <p
            className="text-center whitespace-nowrap"
            style={{
              fontSize: 48,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.48px',
              color: '#f5f7fc',
            }}
          >
            Why Choose L37?
          </p>
        </div>

        {/* Cards row — items-stretch so all cards match the tallest */}
        <div className="flex gap-[24px] items-stretch w-full">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex-1 rounded-[16px] overflow-hidden flex flex-col justify-between"
              style={{
                padding: 48,
                backgroundImage: CARD_BG,
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {/* Icon box — top */}
              <div
                className="rounded-[6px] flex items-center justify-center"
                style={{
                  width: 60,
                  height: 60,
                  background: 'rgba(245,247,252,0.05)',
                  flexShrink: 0,
                }}
              >
                <Image src={card.icon} alt={card.iconAlt} width={40} height={40} />
              </div>

              {/* Title + body — bottom */}
              <div className="flex flex-col gap-[24px]">
                <p
                  style={{
                    fontSize: 36,
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: '-0.36px',
                    color: '#ffffff',
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: '#dbe5fc',
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
