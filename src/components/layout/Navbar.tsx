import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  // { label: 'Services',    href: '#' }, // hidden for now
  { label: 'Company',     href: '#' },
  { label: 'Team',        href: '/team' },
  { label: 'Contact Us',  href: '/contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[90px] backdrop-blur-[22px] bg-[rgba(219,229,252,0.01)] overflow-hidden rounded-b-[16px]">
      <div className="max-w-[1408px] mx-auto px-8 h-full relative flex items-center">

        {/* Лого — абсолютно зліва */}
        <Link href="/">
          <Image
            src="/images/logo/l37-logo-black.svg"
            alt="L37"
            width={84}
            height={48}
            priority
          />
        </Link>

        {/* Меню — right-aligned, matching logo's left px-8 offset */}
        <div className="ml-auto flex items-center" style={{ gap: '32px' }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-denim font-normal text-[16px] leading-[1.4] text-navy-base hover:text-primary-base transition-colors whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  )
}
