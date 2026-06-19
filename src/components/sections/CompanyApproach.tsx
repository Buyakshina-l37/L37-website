import Image from 'next/image'

// Approach section — Figma node 13822:4328
// Top row: label+heading LEFT (468px) ↔ body RIGHT (591px), items-end justify-between
// Cards row: 3 cards, 394px tall, icon top / title+body bottom (justify-between)
// Icon: 60×60 frosted-glass container (rgba white 0.1, rounded-6), 40×40 icon inside
// Card title: 36px, card body: 20px

const CARDS = [
  {
    icon: '/icons/icon-ai-light.svg',
    title: 'Clinical intelligence at the core',
    body: 'Every system is grounded in real clinical knowledge, not generic AI bolted onto hardware.',
  },
  {
    icon: '/icons/icon-knowledge-graph.svg',
    title: 'A knowledge-graph backbone',
    body: 'A shared graph and ontology link patient pathways to robot actions, one connected model.',
  },
  {
    icon: '/icons/icon-ward.svg',
    title: 'Validated before the ward',
    body: 'Solutions are proven in a digital twin before they ever reach a real clinical environment.',
  },
]

export default function CompanyApproach() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[80px]">

        {/* Top row — label+heading LEFT, body RIGHT */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-[32px] md:gap-[48px]">

          {/* Left: label + heading */}
          <div className="flex flex-col gap-[24px] shrink-0 md:w-[468px]">
            <div className="px-[8px] py-[4px] rounded-[3px]">
              <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
                OUR APPROACH
              </p>
            </div>
            <h2
              className="font-denim font-medium text-navy-base"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
            >
              Healthcare first. Physical AI second.
            </h2>
          </div>

          {/* Right: body text */}
          <p
            className="font-denim font-normal text-navy-90 leading-[1.4] md:w-[591px] shrink-0"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            We did not arrive at medicine through robotics. We came the other way around. Our team builds Physical AI from a clinical and AI foundation, connecting patient pathways to robot actions through a shared knowledge graph and clinical ontology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between items-start p-[40px] rounded-[16px]"
              style={{
                background: 'linear-gradient(180deg, rgba(36,115,242,0.5) 0%, rgba(36,115,242,0.9) 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
                minHeight: 394,
              }}
            >
              {/* Icon — frosted glass container 60×60, icon 40×40, light/base color */}
              <div
                className="flex items-center justify-center rounded-[6px] shrink-0 text-light-base"
                style={{ width: 60, height: 60, background: 'rgba(255,255,255,0.1)' }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="text-light-base"
                  style={{ color: '#F5F7FC' }}
                />
              </div>

              {/* Title + body — pushed to bottom */}
              <div className="flex flex-col justify-between" style={{ height: 190, width: '100%' }}>
                <h3
                  className="font-denim font-normal text-white leading-[1.15]"
                  style={{ fontSize: 36, letterSpacing: '-0.36px' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-denim font-normal text-white leading-[1.4]"
                  style={{ fontSize: 20 }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
