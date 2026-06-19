// Focus Markets section — dark bg (#141b29), rounded-tl rounded-tr
// Label, heading (gradient on "Start narrow."), body, 3 cards, footer note

const MARKETS = [
  {
    stage: 'START',
    dotColor: '#93c5fd', // blue-300
    title: 'Pediatrics',
  },
  {
    stage: 'FOCUS',
    dotColor: '#2473f2',
    title: 'Rare diseases',
  },
  {
    stage: 'EXPAND',
    dotColor: '#34d399', // teal/emerald
    title: 'Cardiology · Long-term care · Oncology',
  },
]

export default function CompanyFocusMarkets() {
  return (
    <section
      className="relative py-[80px] md:py-[140px] px-[20px] md:px-[16px]"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(36,115,242,0.15) 0%, transparent 70%), #141b29',
        borderRadius: '24px 24px 0 0',
      }}
    >
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[60px]">

        {/* Text block */}
        <div className="flex flex-col gap-[32px] items-start max-w-[700px]">
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-[11px] uppercase tracking-[1.65px] leading-[1.4]" style={{ color: '#4c9cff' }}>
              FOCUS &amp; MARKETS
            </p>
          </div>

          <h2
            className="font-denim font-normal text-light-base"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
          >
            <span
              style={{
                backgroundImage: 'linear-gradient(89deg, #3683ff 0%, #70e397 98%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Start narrow.
            </span>
            {' '}Earn the right to expand.
          </h2>

          <p
            className="font-denim font-normal leading-[1.4]"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)', color: '#dbe5fc' }}
          >
            We begin where the need is sharpest and the bar is highest: pediatrics, where every gram of data matters and the stakes are absolute. Then rare diseases, where there is no playbook and AI creates it. Then outward.
          </p>
        </div>

        {/* Market cards */}
        <div className="flex flex-col gap-[0px]">
          {MARKETS.map((market, i) => (
            <div
              key={market.stage}
              className="flex items-center gap-[32px] py-[32px]"
              style={{
                borderBottom: i < MARKETS.length - 1 ? '1px solid rgba(245,247,252,0.1)' : 'none',
              }}
            >
              {/* Dot + stage */}
              <div className="flex items-center gap-[12px] shrink-0 w-[120px]">
                <div
                  className="rounded-full shrink-0"
                  style={{ width: 10, height: 10, backgroundColor: market.dotColor }}
                />
                <span
                  className="font-denim font-medium text-[11px] uppercase tracking-[1.65px] leading-[1.4]"
                  style={{ color: market.dotColor }}
                >
                  {market.stage}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-denim font-normal text-light-base leading-[1.25]"
                style={{ fontSize: 'clamp(20px, 2.5vw, 36px)', letterSpacing: '-0.36px' }}
              >
                {market.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="font-denim font-normal leading-[1.4]"
          style={{ fontSize: 16, color: 'rgba(245,247,252,0.5)' }}
        >
          Primary market: United States, then Europe, then Asia Pacific.
        </p>

      </div>
    </section>
  )
}
