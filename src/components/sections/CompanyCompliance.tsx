// Compliance section — light bg, centered
// Label: "TRUST BY DESIGN", heading, body, 3 white-gradient cards (HIPAA / HDS / GDPR)

const ITEMS = [
  {
    title: 'HIPAA',
    region: 'United States',
  },
  {
    title: 'HDS',
    region: 'France / EU health data hosting',
  },
  {
    title: 'GDPR',
    region: 'EU baseline',
  },
]

export default function CompanyCompliance() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[80px] items-center">

        {/* Header */}
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[900px]">
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
              TRUST BY DESIGN
            </p>
          </div>
          <h2
            className="font-denim font-medium text-navy-base text-center"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
          >
            Compliance and trust, built in
          </h2>
          <p
            className="font-denim font-normal text-navy-90 leading-[1.4] text-center"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            HIPAA, HDS and GDPR controls, audit trails and consent management are part of the platform from day one — not bolted on. Local legal entities let us meet each market&apos;s data and sovereignty requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-[16px] items-start p-[40px] rounded-[16px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, #ffffff 100%)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <h3
                className="font-denim font-medium text-navy-base leading-[1.15]"
                style={{ fontSize: 36, letterSpacing: '-0.36px' }}
              >
                {item.title}
              </h3>
              <p
                className="font-denim font-normal text-navy-90 leading-[1.4]"
                style={{ fontSize: 20 }}
              >
                {item.region}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
