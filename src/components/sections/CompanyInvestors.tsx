import Image from 'next/image'
import Link from 'next/link'

// Investors section — photo bg with dark overlay
// Label: "INVESTORS", heading, body, "Request a briefing" white button

export default function CompanyInvestors() {
  return (
    <div className="px-[16px] py-[16px] md:py-[24px]">
      <section
        className="relative overflow-hidden rounded-[24px]"
        style={{ height: 600 }}
      >
        {/* Background image */}
        <Image
          src="/images/investors.png"
          alt="Investors"
          fill
          className="object-cover object-center pointer-events-none"
          sizes="1609px"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.5)' }}
        />

        {/* Content — vertically centered, left-aligned */}
        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ left: 120, right: 120 }}
        >
          <div className="flex flex-col gap-[40px] max-w-[493px]">
            <div className="flex flex-col gap-[24px]">
              <div className="px-[8px] py-[4px] rounded-[3px]">
                <p className="font-denim font-medium text-light-base text-[11px] uppercase tracking-[1.65px] leading-[1.4]">
                  INVESTORS
                </p>
              </div>
              <h2
                className="font-denim font-medium text-light-base"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.48px' }}
              >
                We&apos;re raising at the SAFE stage
              </h2>
              <p
                className="font-denim font-normal leading-[1.4]"
                style={{ fontSize: 18, color: '#dbe5fc', letterSpacing: '0.36px' }}
              >
                L37 is open to investment at the SAFE stage. If you&apos;re an investor, a hospital system, or a potential partner, we&apos;d welcome a conversation — and a briefing on where we&apos;re headed.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white font-denim font-medium text-navy-base hover:opacity-90 transition-opacity"
              style={{ fontSize: 16, lineHeight: '1.25', padding: '18px 0', borderRadius: 16, width: 294 }}
            >
              Request a briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
