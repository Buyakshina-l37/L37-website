// Workflow — mobile layout
// Dark bg + radial blue glow, rounded top corners
// 3 cards stacked vertically (no absolute positioning)

const BG = `
  radial-gradient(ellipse 140% 50% at 50% 0%, rgba(94,176,255,0.5) 0%, rgba(52,96,141,0.25) 40%, transparent 70%),
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

export default function WorkflowMobile() {
  return (
    <section
      style={{
        background: BG,
        borderRadius: '16px 16px 0 0',
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
        workflow
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
        What is the Process?
      </p>

      {/* Cards stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {CARDS.map((card) => (
          <div
            key={card.num}
            style={{
              width: '100%',
              height: '328px',
              borderRadius: '16px',
              padding: '32px',
              backgroundImage: 'linear-gradient(220.898deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Number — anchored to top */}
            <p
              style={{
                margin: 0,
                alignSelf: 'flex-start',
                fontFamily: '"Denim TRIAL", sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: 1.25,
                letterSpacing: '-0.24px',
                color: '#2473f2',
              }}
            >
              {card.num}
            </p>

            {/* Title + body — anchored to bottom */}
            <div style={{ marginTop: 'auto' }}>
              <p
                style={{
                  margin: '0 0 12px',
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
