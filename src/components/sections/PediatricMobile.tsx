// Pediatric — mobile layout
// Image on top, text below

import Image from 'next/image'

export default function PediatricMobile() {
  return (
    <section style={{ padding: '64px 20px', backgroundColor: '#F5F7FC' }}>

      {/* Image */}
      <Image
        src="/images/sar-robot.png"
        alt="SAR robot in pediatric care"
        width={610}
        height={453}
        sizes="100vw"
        style={{ borderRadius: '16px', width: '100%', height: 'auto', marginBottom: '40px' }}
      />

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '24px',
          fontFamily: '"Denim TRIAL", sans-serif',
          fontSize: '32px',
          fontWeight: 500,
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
          }}
        >
          Starting in Pediatric Units,
        </span>
        <span style={{ color: 'rgba(10,15,26,0.9)' }}>
          L37 Builds a Unique Range of Digital and Physical Robots
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          fontFamily: '"Denim TRIAL", sans-serif',
          fontWeight: 400,
          fontSize: '17px',
          lineHeight: 1.4,
          color: 'rgba(10,15,26,0.8)',
        }}
      >
        <p style={{ margin: '0 0 16px' }}>
          L37 integrates and orchestrates a unique range of healthcare robots — social, nurse,
          rehabilitation, MD-assisting and other logistics solutions — starting in pediatric units
          and divisions.
        </p>
        <p style={{ margin: 0 }}>
          Each is driven by agentic AI and a shared clinical ontology, and validated in a digital
          twin before it reaches the ward. Robots are then deployed safely on clinical-grade edge
          hardware.
        </p>
      </div>

    </section>
  )
}
