// OemProgram — mobile layout
// Dark bg, stacked heading, 3 cards vertically

const CARDS = [
  {
    title: 'Certified SimReady Assets',
    body: 'We convert your CAD files into certified, physics-accurate SimReady OpenUSD assets — ready for NVIDIA Isaac Sim and any Physical AI environment.',
  },
  {
    title: 'OEM Exclusivity, Verified',
    body: 'List with OEM-signed exclusivity and a "Verified by MedAsset" badge — your equipment becomes the model every robotics team builds against.',
  },
  {
    title: 'Reach Every Robot Stack',
    body: 'OpenUSD interoperability and FHIR/DICOM-aware metadata put your products in front of robotics teams, digital-twin builders and integrators worldwide.',
  },
]

const BG = `
  radial-gradient(ellipse 120% 50% at 50% 0%, rgba(94,176,255,0.45) 0%, rgba(52,96,141,0.25) 35%, transparent 65%),
  linear-gradient(180deg, #0A0F1A 0%, #0A0F1A 100%)
`.trim()

export default function OemProgramMobile() {
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
          margin: '0 0 20px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 500,
          fontSize: '11px',
          letterSpacing: '1.65px',
          textTransform: 'uppercase',
          color: '#4c9cff',
          lineHeight: 1.4,
        }}
      >
        oem Program
      </p>

      {/* Title */}
      <div
        style={{
          fontFamily: '"Denim TRIAL", sans-serif',
          fontSize: '36px',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.36px',
          marginBottom: '24px',
        }}
      >
        <span
          style={{
            background: 'linear-gradient(90deg, #4c9cff 0%, #1eb995 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
          }}
        >
          Healthcare OEMs:
        </span>
        <span style={{ color: '#f5f7fc', display: 'block' }}>
          Lead the Shift to Physical AI
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          margin: '0 0 48px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 400,
          fontSize: '17px',
          lineHeight: 1.4,
          color: '#dbe5fc',
        }}
      >
        L37 helps you create, maintain and anticipate the changes Physical AI brings. Partner
        early to build a unique, market-leading SimReady OEM catalogue for the world of Physical AI.
      </p>

      {/* Cards stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {CARDS.map((card) => (
          <div
            key={card.title}
            style={{
              width: '100%',
              height: '295px',
              borderRadius: '16px',
              overflow: 'hidden',
              padding: '32px',
              backgroundImage: 'linear-gradient(180deg, rgba(36,115,242,0.8) 0%, rgba(36,115,242,0.4) 100%)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: '"Denim TRIAL", sans-serif',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: 1.25,
                letterSpacing: '-0.28px',
                color: '#f5f7fc',
                alignSelf: 'flex-start',
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
                color: '#f5f7fc',
                letterSpacing: '0.18px',
                alignSelf: 'flex-end',
              }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
