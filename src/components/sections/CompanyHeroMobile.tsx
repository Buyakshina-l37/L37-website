import Link from 'next/link'

// Hero section — mobile version
// Full-bleed image (company-hero-mob.png), 540px tall
// Content starts at top=96px, px=20px
// Heading: 40px white centered
// Two full-width stacked buttons (gap 24px), 60px below heading

export default function CompanyHeroMobile() {
  return (
    <section className="relative overflow-hidden" style={{ height: 540 }}>

      {/* Background photo — mobile */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/company-hero-mob.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Content — top=96, left/right=20 */}
      <div
        className="absolute flex flex-col"
        style={{ top: 96, left: 20, right: 20 }}
      >
        {/* Heading */}
        <h1
          className="font-denim font-medium text-white text-center"
          style={{ fontSize: 40, lineHeight: '1.1', letterSpacing: '-0.4px' }}
        >
          We bring Clinical Intelligence to Physical AI
        </h1>

        {/* Buttons — 60px below heading */}
        <div className="flex flex-col gap-[24px] mt-[60px]">
          <Link
            href="/team"
            className="flex items-center justify-center font-denim font-medium text-navy-base bg-white hover:opacity-90 transition-opacity"
            style={{ fontSize: 16, lineHeight: '1.25', padding: '18px 0', borderRadius: 16 }}
          >
            Meet the team
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center font-denim font-medium text-light-base hover:opacity-90 transition-opacity"
            style={{ fontSize: 16, lineHeight: '1.25', padding: '18px 0', borderRadius: 16, background: 'rgba(20,27,41,0.7)' }}
          >
            Request a briefing
          </Link>
        </div>
      </div>

    </section>
  )
}
