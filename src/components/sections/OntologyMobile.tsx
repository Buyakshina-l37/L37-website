// Ontology — mobile layout
// Image first (full-bleed, edge-to-edge) → 60px gap → heading + rows

const ROWS = [
  {
    label: 'Unified Platform',
    body: 'Clinical AI and Physical AI run on one agentic platform, not two systems bolted together.',
    first: true,
  },
  {
    label: 'Connected Intelligence',
    body: 'A shared knowledge graph and clinical-operational ontology link patient pathways to robot actions.',
  },
  {
    label: 'Seamless Flow',
    body: 'Data and decisions move across applications in real time, from the bedside to the care plan.',
  },
  {
    label: 'Full Care Loop',
    body: 'Agentic pipelines orchestrate the full care loop: explainable, auditable, and compliant by design.',
    last: true,
  },
]

export default function OntologyMobile() {
  return (
    <section style={{ paddingTop: '0', paddingBottom: '64px', backgroundColor: '#F5F7FC', overflow: 'hidden' }}>

      {/* Ontology diagram — full-bleed, edge to edge */}
      <img
        src="/images/ontology.svg"
        alt="Ontology diagram"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />

      {/* Text block — 60px gap after image, with horizontal padding */}
      <div style={{ padding: '60px 20px 0' }}>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '32px',
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
          Clinical and Physical AI,
        </span>
        <span style={{ color: '#141B29' }}>Unified</span>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {ROWS.map((row) => (
          <div
            key={row.label}
            style={{
              borderBottom: row.last ? undefined : '0.5px solid rgba(10,15,26,0.2)',
              paddingTop: row.first ? 0 : 16,
              paddingBottom: row.last ? 0 : 16,
            }}
          >
            <p
              style={{
                margin: '0 0 6px',
                fontFamily: '"Denim TRIAL", sans-serif',
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '1.65px',
                lineHeight: 1.4,
                textTransform: 'uppercase',
                color: 'rgba(10,15,26,0.5)',
              }}
            >
              {row.label}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: '"Denim TRIAL", sans-serif',
                fontWeight: 400,
                fontSize: '17px',
                lineHeight: 1.4,
                color: 'rgba(10,15,26,0.8)',
              }}
            >
              {row.body}
            </p>
          </div>
        ))}
      </div>

      </div>{/* end text block */}
    </section>
  )
}
