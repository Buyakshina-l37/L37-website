'use client'

import { useEffect, useRef, useState } from 'react'

function Label({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center px-[6px] py-[4px] bg-primary-base text-light-base font-denim font-medium text-[11px] uppercase tracking-[0.55px] leading-[1.4] rounded-[3px]">
      {text}
    </span>
  )
}

const stats = [
  { value: 6,   suffix: 'M+', label: 'Healthcare professionals' },
  { value: 45,  suffix: 'B+', label: 'Medical and pharmacy claims' },
  { value: 300, suffix: 'M+', label: 'Patients' },
  { value: 30,  suffix: 'M+', label: 'Publications' },
  { value: 400, suffix: 'K+', label: 'Clinical trials' },
  { value: 95,  suffix: '%+', label: 'Payers' },
]

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatItem({ value, suffix, label, started }: {
  value: number
  suffix: string
  label: string
  started: boolean
}) {
  const count = useCountUp(value, 2000, started)

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="font-denim font-normal text-[80px] leading-[1.05] tracking-[-0.8px] text-navy-base">
        {count}{suffix}
      </div>
      <p className="font-denim font-normal text-[18px] leading-[1.4] text-[rgba(10,15,26,0.6)]">
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-light-strong px-[16px] py-[140px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Заголовок */}
        <div className="flex flex-col items-center gap-[16px] mb-[64px]">
          <Label text="L37 data" />
          <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-navy-base text-center">
            We Analyze Billions Data Points
          </h2>
          <p className="font-denim font-normal text-[20px] leading-[1.4] text-[rgba(10,15,26,0.8)] text-center max-w-[580px]">
            At the core of our offering is robust and scalable analytics platform capable of managing vast and diverse health data.
          </p>
        </div>

        {/* Блок з цифрами */}
        <div
          ref={ref}
          className="bg-white rounded-[16px] p-[64px] grid grid-cols-3 gap-x-[80px] gap-y-[64px]"
        >
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
