// Global section — dark bg (#141b29), rounded-bl rounded-br
// Left: label + gradient heading + body
// Right: 4 items with border-bottom dividers

const ITEMS = [
  {
    title: 'Headquarters',
    body: 'United States: Delaware C-Corp, the parent entity and primary market.',
  },
  {
    title: 'Commercial units',
    body: 'France, Germany, Australia and the United Kingdom: market presence in established healthcare economies, with more as we grow.',
  },
  {
    title: 'Delivery centres',
    body: 'Kazakhstan, Kenya: large-scale engineering and delivery teams that let us build at speed and scale.',
  },
  {
    title: 'Why local entities matter',
    body: 'Healthcare data is sovereign and tightly regulated. Local legal entities unlock national data access and market compliance. We establish them early, turning a barrier into an advantage.',
  },
]

export default function CompanyGlobal() {
  return (
    <section
      className="relative py-[80px] md:py-[140px] px-[20px] md:px-[16px]"
      style={{ background: '#141b29', borderRadius: '0 0 24px 24px' }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-[60px] md:gap-[164px] items-start">

          {/* Left col */}
          <div className="flex flex-col gap-[24px] shrink-0 md:w-[429px]">
            <div className="px-[8px] py-[4px] rounded-[3px]">
              <p className="font-denim font-medium text-[#4c9cff] text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
                GLOBAL BY DESIGN
              </p>
            </div>
            <h2
              className="font-denim font-normal"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px', color: '#f5f7fc' }}
            >
              {`Built to operate `}
              <span
                style={{
                  backgroundImage: 'linear-gradient(89.5deg, rgb(54,131,255) 0%, rgb(112,227,151) 98%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                across borders
              </span>
            </h2>
            <p
              className="font-denim font-normal leading-[1.4]"
              style={{ fontSize: 'clamp(17px, 2vw, 20px)', color: '#dbe5fc' }}
            >
              L37 is headquartered in the United States and expands internationally fast, pairing commercial units in established markets with large-scale delivery centres.
            </p>
          </div>

          {/* Right col — list */}
          <div className="flex flex-col flex-1">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-[24px] py-[40px]"
                style={{
                  borderBottom: i < ITEMS.length - 1 ? '1px solid rgba(245,247,252,0.1)' : 'none',
                }}
              >
                <h3
                  className="font-denim font-normal text-white leading-[1.15] text-[28px] md:text-[36px]"
                  style={{ letterSpacing: '-0.36px' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-denim font-normal leading-[1.4]"
                  style={{ fontSize: 20, color: '#dbe5fc' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
