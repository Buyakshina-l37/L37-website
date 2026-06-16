// Figma: 13718:11192 — "workflow" frame, 1608×748px
// Dark bg (#0A0F1A) + radial blue glow from top centre, rounded-tl-[16px] rounded-tr-[16px]
// Inner content: max-w-[1281px] centred, flex-col gap-[80px], py-[80px]

const BG = `
  radial-gradient(ellipse 80% 60% at 50% 0%, rgba(94,176,255,0.5) 0%, rgba(52,96,141,0.25) 40%, transparent 70%),
  linear-gradient(180deg, #0A0F1A 0%, #0A0F1A 100%)
`.trim()

const CARDS = [
  {
    num: '/01',
    title: 'Contact Us',
    body: 'Start a conversation. Tell us where you are on your Clinical or Physical AI journey — no commitment required.',
  },
  {
    num: '/02',
    title: 'Specify Your Needs',
    body: 'We scope your clinical and operational challenges together and define a tailored solution with clear outcomes.',
  },
  {
    num: '/03',
    title: 'Engage',
    body: 'We deploy, integrate, and partner with your teams — from pilot to scale, with compliance built in.',
  },
]

const CARD_BG = 'linear-gradient(220.898deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'

export default function Workflow() {
  return (
    <div
      className="w-full overflow-hidden rounded-tl-[16px] rounded-tr-[16px]"
      style={{ background: BG }}
    >
      {/* Inner content — max 1281px centred */}
      <div
        className="flex flex-col items-center gap-[80px] mx-auto"
        style={{ maxWidth: 1281, padding: '80px 0' }}
      >
        {/* Heading block */}
        <div className="flex flex-col items-center gap-[24px]" style={{ width: 954 }}>
          <div className="px-[8px] py-[4px]" style={{ borderRadius: 2.743 }}>
            <p
              className="uppercase whitespace-nowrap leading-[1.4]"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: '1.65px', color: '#4c9cff' }}
            >
              workflow
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
            What is the Process?
          </p>
        </div>

        {/* Cards row */}
        <div className="flex gap-[24px] items-center w-full">
          {CARDS.map((card) => (
            <div
              key={card.num}
              className="relative flex-shrink-0 rounded-[16px] overflow-hidden"
              style={{
                width: 411,
                height: 356,
                backgroundImage: CARD_BG,
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {/* Number — top right */}
              <p
                className="absolute text-right whitespace-nowrap"
                style={{
                  top: 47,
                  left: 362,
                  transform: 'translateX(-100%)',
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: '-0.24px',
                  color: '#2473f2',
                }}
              >
                {card.num}
              </p>

              {/* Content */}
              <div
                className="absolute flex flex-col gap-[40px]"
                style={{ left: 47, top: 114, width: 315 }}
              >
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
