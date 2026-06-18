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

export default function Ontology() {
  return (
    <div className="flex gap-[130px] items-center w-full">
      {/* Left: text column */}
      <div className="flex flex-col gap-[40px] flex-shrink-0" style={{ width: 610 }}>
        {/* Heading */}
        <h2
          className="flex flex-col"
          style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.48px' }}
        >
          <span className="text-gradient-highlight">Clinical and Physical AI,</span>
          <span className="text-[#0a0f1a]">Unified</span>
        </h2>

        {/* Rows */}
        <div className="flex flex-col">
          {ROWS.map((row) => (
            <div
              key={row.label}
              style={{
                borderBottom: row.last ? undefined : '0.5px solid rgba(10,15,26,0.2)',
                paddingTop: row.first ? 0 : 20,
                paddingBottom: row.last ? 0 : 20,
              }}
            >
              <p
                className="uppercase"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '1.65px',
                  lineHeight: 1.4,
                  color: 'rgba(10,15,26,0.5)',
                  marginBottom: 8,
                }}
              >
                {row.label}
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: 'rgba(10,15,26,0.8)',
                }}
              >
                {row.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: ontology diagram */}
      <img
        src="/images/ontology.svg"
        alt="Ontology diagram"
        className="flex-shrink-0 rounded-[16px]"
        style={{ width: 610, height: 554 }}
      />
    </div>
  )
}
