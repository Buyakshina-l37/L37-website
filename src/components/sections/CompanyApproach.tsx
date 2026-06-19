import Image from 'next/image'

// Approach section — light bg, label + heading + body + 3 blue gradient cards with icons

const CARDS = [
  {
    icon: '/icons/icon-ai.svg',
    title: 'Clinical intelligence at the core',
    body: 'Every system is grounded in real clinical knowledge — pathways, protocols, patient data and outcomes — not retrofitted after the fact. Medicine shapes the model.',
  },
  {
    icon: '/icons/icon-knowledge-graph.svg',
    title: 'A knowledge-graph backbone',
    body: 'A shared graph and ontology link patient pathways, device behaviour, clinical terminology and regulatory data — so every agent and robot speaks the same language.',
  },
  {
    icon: '/icons/icon-ward.svg',
    title: 'Validated before the ward',
    body: "Solutions are proven in a digital twin of the clinical environment before any physical deployment — reducing risk, accelerating regulatory approval and earning clinician trust.",
  },
]

export default function CompanyApproach() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[60px]">

        {/* Text block */}
        <div className="flex flex-col gap-[32px] items-start max-w-[700px]">
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
              OUR APPROACH
            </p>
          </div>
          <h2
            className="font-denim font-normal text-navy-base"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
          >
            Healthcare first. Physical AI second.
          </h2>
          <p
            className="font-denim font-normal text-navy-80 leading-[1.4]"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            We did not arrive at medicine through robotics. We came the other way around — decades in clinical environments, then building the AI layer that healthcare actually needs. That sequence matters.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-[40px] items-start p-[40px] rounded-[16px]"
              style={{
                background: 'linear-gradient(180deg, rgba(36,115,242,0.5) 0%, rgba(36,115,242,0.9) 100%)',
                minHeight: 394,
              }}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="shrink-0"
              />
              <div className="flex flex-col gap-[16px] flex-1">
                <h3
                  className="font-denim font-medium text-white leading-[1.25]"
                  style={{ fontSize: 24 }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-denim font-normal leading-[1.4]"
                  style={{ fontSize: 18, color: 'rgba(245,247,252,0.85)' }}
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
