// Static section — no client interactivity required
//
// Figma frame (01-Home → oemProgram): 1608 × 862 px
// Inner content: left=163 top=140 width=1281
// At browser 1440px (content 1408px after page 16px padding):
// Horizontal padding scales proportionally: 163/1608 ≈ 10.15%
// Top padding kept at 140px to match Figma.

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

// Figma background: SVG-based radial gradient (blue glow from top) over dark #0A0F1A
// Reproduced as CSS approximation — blue ellipse glow centred at top of section
const BG = `
  radial-gradient(ellipse 90% 50% at 50% 0%, rgba(94,176,255,0.45) 0%, rgba(52,96,141,0.25) 35%, transparent 65%),
  linear-gradient(180deg, #0A0F1A 0%, #0A0F1A 100%)
`.trim()

export default function OemProgram() {
  return (
    // Figma: overflow-clip rounded-tl-[16px] rounded-tr-[16px]
    <div
      className="w-full rounded-tl-[16px] rounded-tr-[16px] overflow-hidden"
      style={{ background: BG }}
    >
      {/* Inner content — Figma: absolute left-[163px] top-[140px] w-[1281px] */}
      {/* Using proportional padding so content scales correctly at 1440px viewport */}
      <div
        className="flex flex-col gap-[80px]"
        style={{ padding: '140px 10.15% 140px' }}
      >

        {/* ── Header block — Figma: flex-col gap-[23px] ── */}
        <div className="flex flex-col gap-[23px] w-full">

          {/* Label — Figma: px-[8px] py-[4px] rounded-[2.743px] text-[#4c9cff] */}
          <div className="px-[8px] py-[4px] w-fit" style={{ borderRadius: 2.743 }}>
            <p
              className="text-[#4c9cff] uppercase leading-[1.4] whitespace-nowrap"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: '1.65px' }}
            >
              oem Program
            </p>
          </div>

          {/* Heading row — Figma: flex items-start justify-between w-full */}
          {/* (Figma uses items-start not items-center — titles and desc top-align) */}
          <div className="flex items-start justify-between w-full">

            {/* Title block — Figma: flex-col w-[562px] text-[48px] whitespace-nowrap */}
            <div
              className="flex flex-col flex-shrink-0 whitespace-nowrap"
              style={{ width: 562, fontSize: 48, lineHeight: 1.15, letterSpacing: '-0.48px' }}
            >
              {/* "Healthcare OEMs:" — Figma: gradient/gradient/dark/text-highlight via image */}
              {/* Approximated with CSS gradient to avoid localhost image dependency */}
              <span
                style={{
                  fontWeight: 400,
                  background: 'linear-gradient(90deg, #4c9cff 0%, #1eb995 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Healthcare OEMs:
              </span>

              {/* "Lead the Shift…" — Figma: text-[#f5f7fc] font-regular */}
              <span className="text-[#f5f7fc]" style={{ fontWeight: 400 }}>
                Lead the Shift to Physical AI
              </span>
            </div>

            {/* Description — Figma: w-[527px] text-[#dbe5fc] text-[20px] leading-[1.4] */}
            <p
              className="text-[#dbe5fc] flex-shrink-0"
              style={{ width: 527, fontSize: 20, fontWeight: 400, lineHeight: 1.4 }}
            >
              L37 helps you create, maintain and anticipate the changes Physical AI brings. Partner
              early to build a unique, market-leading SimReady OEM catalogue for the world of
              Physical AI.
            </p>
          </div>
        </div>

        {/* ── Cards row — Figma: flex gap-[24px] items-center ── */}
        <div className="flex gap-[24px] items-center w-full">
          {CARDS.map((card) => (
            // Figma: w-[411px] h-[346px] rounded-[16px] overflow-clip
            // bg: gradient-to-b from-[rgba(36,115,242,0.8)] to-[rgba(36,115,242,0.4)]
            // border: border border-[rgba(255,255,255,0.15)]
            <div
              key={card.title}
              className="relative flex-shrink-0 rounded-[16px] overflow-hidden"
              style={{
                width: 411,
                height: 346,
                backgroundImage: 'linear-gradient(180deg, rgba(36,115,242,0.8) 0%, rgba(36,115,242,0.4) 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {/* Card title — Figma: absolute top-[47px] left-[47px] w-[315px] text-[36px] */}
              <p
                className="absolute text-[#f5f7fc]"
                style={{
                  top: 47,
                  left: 47,
                  width: 315,
                  fontSize: 36,
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.36px',
                }}
              >
                {card.title}
              </p>

              {/* Card body — Figma: absolute bottom-[47px] left-[47px] w-[315px] text-[18px] */}
              <p
                className="absolute text-[#f5f7fc]"
                style={{
                  bottom: 47,
                  left: 47,
                  width: 315,
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  letterSpacing: '0.36px',
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
