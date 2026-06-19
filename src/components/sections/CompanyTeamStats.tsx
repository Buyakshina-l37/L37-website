// Team / Scale stats section — light bg, centered
// Label, heading, body, 3 stat cards (bg #ebf0fa), bottom text

const STATS = [
  {
    stat: '3 regions',
    detail: 'North America · Europe · Asia Pacific',
  },
  {
    stat: 'Healthcare + AI',
    detail: 'Clinicians, data scientists, AI & robotics engineers',
  },
  {
    stat: 'Proven together',
    detail: 'A core team that has built and scaled before',
  },
]

export default function CompanyTeamStats() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[80px] items-center">

        {/* Header */}
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[900px]">
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
              THE TEAM
            </p>
          </div>
          <h2
            className="font-denim font-medium text-navy-base text-center"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
          >
            A senior team in Healthcare and AI
          </h2>
          <p
            className="font-denim font-normal text-navy-90 leading-[1.4] text-center"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            Deep expertise in clinical AI, simulation, robotics and healthcare data — with a record of delivering at scale.
          </p>
        </div>

        {/* Stats + bottom */}
        <div className="flex flex-col gap-[40px] items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
            {STATS.map((s) => (
              <div
                key={s.stat}
                className="flex flex-col gap-[32px] items-start p-[40px] rounded-[16px]"
                style={{ backgroundColor: '#ebf0fa' }}
              >
                <p
                  className="font-denim font-medium text-primary-base leading-[1.15]"
                  style={{ fontSize: 36, letterSpacing: '-0.36px' }}
                >
                  {s.stat}
                </p>
                <p
                  className="font-denim font-normal text-navy-90 leading-[1.4]"
                  style={{ fontSize: 20 }}
                >
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <p
            className="font-denim font-normal text-navy-90 text-center leading-[1.4] max-w-[900px]"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            Backed by a global network of data scientists, AI engineers, clinical analysts, architects and partners — ready to scale quickly as we grow.
          </p>
        </div>

      </div>
    </section>
  )
}
