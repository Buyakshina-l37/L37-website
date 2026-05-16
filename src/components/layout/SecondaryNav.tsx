'use client'

import { useEffect, useState } from 'react'

const sections = [
  { label: 'Vision',   href: '#vision' },
  { label: 'Solution', href: '#solution' },
  { label: 'Services', href: '#services' },
  { label: 'Data',     href: '#data' },
  { label: 'Partners', href: '#partners' },
]

export default function SecondaryNav() {
  const [active, setActive] = useState('Vision')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ label, href }) => {
      const el = document.querySelector(href)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(label)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="fixed bottom-[32px] left-1/2 -translate-x-1/2 z-40">
      <div className="backdrop-blur-[26px] bg-[rgba(245,247,252,0.3)] rounded-[16px] px-[32px] py-[24px] shadow-nav border border-[rgba(255,255,255,0.4)]">
        <div className="flex gap-[24px] items-center">
          {sections.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-[8px] relative group"
              onClick={() => setActive(label)}
            >
              <span className={`font-denim font-medium text-[12px] uppercase tracking-[0.36px] whitespace-nowrap transition-colors ${
                active === label ? 'text-navy-base' : 'text-navy-50'
              }`}>
                {label}
              </span>
              {active === label && (
                <div className="absolute -bottom-[4px] left-0 right-0 h-[2px] bg-primary-base rounded-full" />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
