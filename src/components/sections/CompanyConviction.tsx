// Conviction section — light bg, centered
// Label: "OUR CONVICTION" (blue, 11px uppercase)
// Heading: 48px navy
// Body: 20px navy-80, max-w-[900px]

export default function CompanyConviction() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[900px] flex flex-col items-center gap-[32px] text-center">

        {/* Label */}
        <div className="px-[8px] py-[4px] rounded-[3px]">
          <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
            OUR CONVICTION
          </p>
        </div>

        {/* Heading */}
        <h2
          className="font-denim font-medium text-navy-base"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
        >
          Bringing Clinical Intelligence to Physical AI is paramount for healthcare, life sciences and pharma.
        </h2>

        {/* Body */}
        <p
          className="font-denim font-normal text-navy-80 leading-[1.4]"
          style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
        >
          Robots and agents are entering clinical environments fast. Without clinical understanding at their core, they cannot be safe, effective or trusted. We build that understanding in from the start, so the machine and the medicine speak the same language.
        </p>

      </div>
    </section>
  )
}
