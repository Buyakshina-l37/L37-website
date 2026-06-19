import Link from 'next/link'

// GetInTouch section — centered CTA
// Label, heading, body, "Request a briefing" dark button

export default function CompanyGetInTouch() {
  return (
    <section className="py-[80px] md:py-[140px] px-[20px] md:px-[16px]">
      <div className="mx-auto max-w-[800px] flex flex-col gap-[48px] items-center text-center">

        <div className="flex flex-col gap-[24px] items-center">
          <div className="px-[8px] py-[4px] rounded-[3px]">
            <p className="font-denim font-medium text-primary-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
              GET IN TOUCH
            </p>
          </div>
          <h2
            className="font-denim font-medium text-navy-base text-center"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
          >
            Let&apos;s talk
          </h2>
          <p
            className="font-denim font-normal text-navy-90 leading-[1.4] text-center"
            style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}
          >
            Whether you&apos;re evaluating Physical AI for your hospital, exploring a partnership, or considering an investment — we want to hear from you.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-navy-base text-light-base font-denim font-medium hover:opacity-90 transition-opacity w-full md:w-[294px]"
          style={{ fontSize: 16, lineHeight: '1.25', padding: '18px 0', borderRadius: 16 }}
        >
          Request a briefing
        </Link>

      </div>
    </section>
  )
}
