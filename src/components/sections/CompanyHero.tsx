import Image from 'next/image'
import Link from 'next/link'

// Hero section — dark bg + company-hero.png
// Heading: Denim WD Medium 56px white
// Buttons: "Meet the team" (white bg) + "Request a briefing" (white text, dark bg)

export default function CompanyHero() {
  return (
    <div className="md:px-[16px] md:py-[24px] px-[16px] py-[16px]">
      <section
        className="relative max-w-[1609px] mx-auto overflow-hidden md:rounded-[24px]"
        style={{ height: '560px' }}
      >
        {/* Background photo */}
        <Image
          src="/images/company-hero.png"
          alt="L37 Company"
          fill
          className="object-cover object-center pointer-events-none"
          priority
          sizes="1609px"
        />

        {/* Content — bottom-left aligned (Figma: x=90, y=268 in 580px frame) */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col"
          style={{ left: 90, right: 90, paddingBottom: 60 }}
        >
          <div className="flex flex-col gap-[48px] max-w-[700px]">
            <h1
              className="font-denim font-medium text-white"
              style={{ fontSize: 56, lineHeight: '1.1', letterSpacing: '-0.56px' }}
            >
              We bring Clinical Intelligence to Physical AI
            </h1>

            <div className="flex gap-[24px] items-center flex-wrap">
              <Link
                href="/team"
                className="inline-flex items-center justify-center font-denim font-medium text-navy-base bg-white hover:opacity-90 transition-opacity"
                style={{ fontSize: 16, lineHeight: '1.25', padding: '18px 48px', borderRadius: 16 }}
              >
                Meet the team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-denim font-medium text-light-base hover:opacity-90 transition-opacity"
                style={{ fontSize: 16, lineHeight: '1.25', padding: '18px 48px', borderRadius: 16, background: 'rgba(20,27,41,0.7)' }}
              >
                Request a briefing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
