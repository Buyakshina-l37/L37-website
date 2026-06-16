// GetInTouch — mobile layout
// Centered heading + 3 full-width buttons stacked

import Link from 'next/link'

const BUTTONS = [
  { label: 'Request a hospital briefing', variant: 'outline' as const },
  { label: 'Investor deck request',       variant: 'filled'  as const },
  { label: 'Pharma / data partnerships',  variant: 'outline' as const },
]

export default function GetInTouchMobile() {
  return (
    <section style={{ padding: '64px 20px', backgroundColor: '#F5F7FC' }}>

      {/* Label */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <p
          style={{
            margin: 0,
            fontFamily: '"Denim TRIAL", sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '1.65px',
            textTransform: 'uppercase',
            color: '#2473f2',
            lineHeight: 1.4,
          }}
        >
          Get in touch
        </p>
      </div>

      {/* Title */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: 1.15,
          letterSpacing: '-0.32px',
        }}
      >
        <span
          style={{
            background: 'linear-gradient(90deg, #1964df 23.97%, #1eb995 78.84%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
          }}
        >
          Ready to deploy Clinical &amp; Physical AI
        </span>
        <span style={{ color: 'rgba(10,15,26,0.9)', display: 'block' }}>
          in your Organisation?
        </span>
      </div>

      {/* Body */}
      <p
        style={{
          margin: '0 0 48px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 400,
          fontSize: '17px',
          lineHeight: 1.4,
          color: 'rgba(10,15,26,0.9)',
          textAlign: 'center',
        }}
      >
        Whether you are a hospital system evaluating robot deployment, a pharma company needing
        paediatric RWD, or an investor looking for a briefing — we want to hear from you.
      </p>

      {/* Buttons stacked */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {BUTTONS.map(({ label, variant }) => (
          <Link
            key={label}
            href="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '18px 0',
              borderRadius: '16px',
              fontFamily: '"Denim TRIAL", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: 1.25,
              textDecoration: 'none',
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

    </section>
  )
}
