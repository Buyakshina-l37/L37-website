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
    title: 'A Simple Path to Deployment',
    body: 'Start a conversation. Tell us where you are on your Clinical or Physical AI journey — no commitment required.',
  },
  {
    num: '/02',
    title: 'From First Conversation to Full Scale',
    body: 'We scope your clinical and operational challenges together and define a tailored solution with clear outcomes.',
  },
  {
    num: '/03',
    title: 'How We Engage',
    body: 'We deploy, integrate, and partner with your teams — from pilot to scale, with compliance built in.',
  },
]

const CARD_BG = 'linear-gradient(223.885deg, rgba(255,255,255,0.05) 1.6434%, rgba(255,255,255,0.02) 98.44%)'

const numStyle = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 1.25,
  letterSpacing: '-0.24px',
  color: '#2473f2',
  textAlign: 'right' as const,
  width: '100%',
}
const titleStyle = {
  fontSize: 36,
  fontWeight: 400,
  lineHeight: 1.15,
  letterSpacing: '-0.36px',
  color: '#ffffff',
  width: '100%',
}
const bodyStyle = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: 1.4,
  color: '#dbe5fc',
  width: '100%',
}
const cardBase = {
  width: 411,
  height: 438,
  padding: 48,
  backgroundImage: CARD_BG,
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 16,
  flexShrink: 0,
}

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
            style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.48px', color: '#f5f7fc' }}
          >
            What is the Process?
          </p>
        </div>

        {/* Cards row — fixed-width cards, items-center */}
        <div className="flex gap-[24px] items-center w-full">

          {/* Card 1 — flex-col justify-between: {num+title} top, body bottom */}
          <div className="flex flex-col justify-between" style={cardBase}>
            <div className="flex flex-col gap-[32px] items-end w-full">
              <p style={numStyle}>{CARDS[0].num}</p>
              <p style={titleStyle}>{CARDS[0].title}</p>
            </div>
            <p style={bodyStyle}>{CARDS[0].body}</p>
          </div>

          {/* Card 2 — items-center: all content vertically centred, w-[315px] inner */}
          <div className="flex items-center" style={cardBase}>
            <div className="flex flex-col gap-[45px]" style={{ width: 315 }}>
              <div className="flex flex-col gap-[32px] items-end w-full">
                <p style={numStyle}>{CARDS[1].num}</p>
                <p style={titleStyle}>{CARDS[1].title}</p>
              </div>
              <p style={bodyStyle}>{CARDS[1].body}</p>
            </div>
          </div>

          {/* Card 3 — flex-col justify-between: {num+title} top, body bottom */}
          <div className="flex flex-col justify-between" style={cardBase}>
            <div className="flex flex-col gap-[32px] items-start w-full">
              <p style={numStyle}>{CARDS[2].num}</p>
              <p style={titleStyle}>{CARDS[2].title}</p>
            </div>
            <p style={bodyStyle}>{CARDS[2].body}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
