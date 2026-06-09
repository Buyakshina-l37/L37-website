import Image from 'next/image'
import Link from 'next/link'

const navLinks = ['Services', 'Company', 'Team', /* 'Careers', 'Blog', */ 'Contact Us']

const socialLinks = [
  { href: 'https://linkedin.com/company/l37-co/', icon: '/images/Button-social-media-in.svg', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/L37.co', icon: '/images/Button-social-media-fb.svg', label: 'Facebook' },
  { href: 'https://www.instagram.com/l37.co', icon: '/images/Button-social-media-insta.svg', label: 'Instagram' },
  { href: 'https://x.com/L37Healthcare', icon: '/images/Button-social-media-x.svg', label: 'X' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0F1A', borderRadius: '24px 24px 0 0' }}>
      <div
        className="max-w-[1408px] mx-auto px-[80px]"
        style={{ paddingTop: '64px', paddingBottom: '48px' }}
      >
        {/* Верхня частина — лого + навігація */}
        <div className="flex items-center justify-between mb-[80px]">
          <Image
            src="/images/logo/l37-logo-white.svg"
            alt="L37"
            width={104}
            height={58}
            priority
          />
          <div className="flex items-center" style={{ gap: '48px' }}>
            {navLinks.map(item => (
              <Link
                key={item}
                href="#"
                className="font-denim font-normal text-[16px] leading-[1.4] text-light-base hover:text-[rgba(245,247,252,0.7)] transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Нижня частина — копірайт + соцмережі */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[32px]">
            <span className="font-denim font-normal text-[12px] text-[rgba(245,247,252,0.5)]">
              L37.CO © 2026 L37 INC
            </span>
            <Link
              href="#"
              className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-[rgba(245,247,252,0.5)] hover:text-light-base transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-denim font-medium text-[12px] uppercase tracking-[0.36px] text-[rgba(245,247,252,0.5)] hover:text-light-base transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-[24px]">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image src={icon} alt={label} width={40} height={40} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
