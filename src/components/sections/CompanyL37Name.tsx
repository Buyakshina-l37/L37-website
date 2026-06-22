// L37 Name section — light bg, centered label + heading + 2 cards
// Cards: bg-[#ebf0fa], large letter in Inter bold blue, title + body

export default function CompanyL37Name() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-[60px]">

        {/* Header block — centered */}
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[826px] mx-auto">
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
              THE NAME
            </p>
          </div>
          <h2
            className="font-denim font-medium text-navy-base"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
          >
            The Story behind the Name
          </h2>
          <p
            className="font-denim font-normal text-navy-90 leading-[1.4]"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            L37 is where biology and machine intelligence become one.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

          {/* L card */}
          <div
            className="flex flex-col gap-[24px] items-start p-[40px] rounded-[16px] overflow-hidden"
            style={{ backgroundColor: '#ebf0fa' }}
          >
            <span
              className="font-semibold text-primary-base leading-normal"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 40 }}
            >
              L
            </span>
            <div className="flex flex-col gap-[12px]">
              <h3
                className="font-denim font-medium text-navy-base leading-[1.25]"
                style={{ fontSize: 24, letterSpacing: '0.48px' }}
              >
                LUCA — the root of life
              </h3>
              <p
                className="font-denim font-normal text-navy-90 leading-[1.4]"
                style={{ fontSize: 18, letterSpacing: '0.36px' }}
              >
                Last Universal Common Ancestor: the single organism all living things descend from. It marks the origin of biological intelligence, adaptation and cooperation. Our work starts from biology and medicine.
              </p>
            </div>
          </div>

          {/* 37 card */}
          <div
            className="flex flex-col gap-[24px] items-start p-[40px] rounded-[16px] overflow-hidden"
            style={{ backgroundColor: '#ebf0fa' }}
          >
            <span
              className="font-semibold text-primary-base leading-normal"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 40 }}
            >
              37
            </span>
            <div className="flex flex-col gap-[12px]">
              <h3
                className="font-denim font-medium text-navy-base leading-[1.25]"
                style={{ fontSize: 24, letterSpacing: '0.48px' }}
              >
                Move 37 — machine creativity
              </h3>
              <p
                className="font-denim font-normal text-navy-90 leading-[1.4]"
                style={{ fontSize: 18, letterSpacing: '0.36px' }}
              >
                In 2016, AlphaGo&apos;s 37th move against Lee Sedol stunned the world — a play no human would make, yet brilliant. It was the moment machine intelligence became genuinely creative. That is the AI we build with.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
