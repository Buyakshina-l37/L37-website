// Figma: 13718:11223 — "Get in touch" frame
// Light page background, centred content, gap-[80px] between heading block and buttons

import Link from 'next/link'

const BUTTONS = [
  { label: 'Request a briefing', variant: 'outline' as const },
  { label: 'Investor deck request',       variant: 'filled'  as const },
  { label: 'Pharma / data partnerships',  variant: 'outline' as const },
]

export default function GetInTouch() {
  return (
    <div className="flex flex-col items-center gap-[80px] w-full">

      {/* Heading block */}
      <div className="flex flex-col items-center gap-[24px]">

        {/* Label */}
        <div className="px-[8px] py-[4px]" style={{ borderRadius: 2.743 }}>
          <p
            className="uppercase whitespace-nowrap leading-[1.4]"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: '1.65px', color: '#2473f2' }}
          >
            Get in touch
          </p>
        </div>

        {/* Title — gradient line + dark line */}
        <div
          className="flex flex-col items-center text-center"
          style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.48px' }}
        >
          <span
            className="text-gradient-highlight"
            style={{ width: 805 }}
          >
            Ready to deploy Clinical &amp; Physical AI
          </span>
          <span style={{ color: 'rgba(10,15,26,0.9)', width: 805 }}>
            in your Organisation?
          </span>
        </div>

        {/* Body */}
        <p
          className="text-center"
          style={{
            fontSize: 20,
            fontWeight: 400,
            lineHeight: 1.4,
            color: 'rgba(10,15,26,0.9)',
            width: 600,
          }}
        >
          Whether you are a hospital system evaluating robot deployment, a pharma company needing
          paediatric RWD, or an investor looking for a briefing — we want to hear from you.
        </p>
      </div>

      {/* Buttons row */}
      <div className="flex gap-[48px] items-center">
        {BUTTONS.map(({ label, variant }) => (
          <Link
            key={label}
            href="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 294,
              padding: '18px 0',
              borderRadius: 16,
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.25,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              ...(variant === 'filled'
                ? {
                    background: '#0a0f1a',
                    color: '#f5f7fc',
                    boxShadow: '0px 6px 4px 0px rgba(0,0,0,0.03)',
                    border: 'none',
                  }
                : {
                    background: 'transparent',
                    color: '#0a0f1a',
                    border: '1px solid #0a0f1a',
                  }),
            }}
          >
            {label}
          </Link>
        ))}
      </div>

    </div>
  )
}
