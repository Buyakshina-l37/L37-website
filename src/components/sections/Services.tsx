'use client'

import { useState } from 'react'
import Image from 'next/image'

function Label({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center px-[6px] py-[4px] bg-primary-base text-light-base font-denim font-medium text-[11px] uppercase tracking-[0.55px] leading-[1.4] rounded-[3px]">
      {text}
    </span>
  )
}

function ServiceCard({
  titleBlue,
  titleDark,
  description,
  wide = false,
  photo,
}: {
  titleBlue: string
  titleDark: string
  description: string
  wide?: boolean
  photo?: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-[16px] overflow-hidden flex flex-col justify-between p-[48px] cursor-pointer transition-all duration-300 shrink-0"
      style={{
        height: '346px',
        flex: wide ? '1 1 0' : '0 0 511px',
        background: hovered
          ? 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.8) 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, #FFFFFF 100%)',
        boxShadow: '0px 20px 40px rgba(0, 43, 148, 0.08)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Фото — зліва */}
      {photo && (
        <div className="absolute left-0 top-0 bottom-0 w-[260px] overflow-hidden">
          <Image
            src={photo}
            alt={titleBlue}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Контент — якщо є фото, відступ зліва */}
      <div
        className="flex flex-col gap-[16px] h-full justify-between"
        style={{ marginLeft: photo ? '284px' : '0' }}
      >
        <h3 className="font-denim font-normal text-[36px] leading-[1.15] tracking-[-0.36px]">
          <span style={{ color: '#2473F2' }}>{titleBlue}</span>
          {titleDark && (
            <>
              <br />
              <span style={{ color: '#0C1629' }}>{titleDark}</span>
            </>
          )}
        </h3>
        <p className="font-denim font-normal text-[18px] leading-[1.4] text-[rgba(12,22,41,0.8)]">
          {description}
        </p>
        <div className="flex justify-end">
          <div
            className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#0C1629' }}
          >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
              <path d="M1 1L6 6L1 11" stroke="#F5F7FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-light-strong px-[16px] pt-[140px] pb-[80px]">
      <div className="max-w-[1408px] mx-auto">

        {/* Заголовок */}
        <div className="flex flex-col items-center gap-[24px] mb-[64px]">
          <Label text="services" />
          <div className="flex flex-col items-center gap-[16px]">
            <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-navy-base text-center max-w-[741px]">
              Healthcare Intelligence at Your Fingertips
            </h2>
            <p className="font-denim font-normal text-[20px] leading-[1.4] text-[rgba(12,22,41,0.8)] text-center max-w-[641px]">
              Our solutions combine exclusive data with human expertise, to deliver healthcare intelligence you can trust.
            </p>
          </div>
        </div>

        {/* Картки */}
        <div className="flex flex-col gap-[24px]">
          {/* Ряд 1 */}
          <div className="flex gap-[24px]">
            <ServiceCard
              titleBlue="Market Access Analytics"
              titleDark="& Health Technology Assessment (HTA)"
              description="Accelerating Market Access with Data-Driven Insights"
            />
            <ServiceCard
              titleBlue="Data as a Service"
              titleDark="& Data Enrichment Services"
              description="We ensure high-quality data management practices that support informed decision-making and strategic planning"
              wide
              photo="/images/Service-Data-Services.png"
            />
          </div>

          {/* Ряд 2 */}
          <div className="flex gap-[24px]">
            <ServiceCard
              titleBlue="KOLs, Experts, & HCPs Profiling"
              titleDark="for Effective Engagement"
              description="L37 combines healthcare data, AI, and intuitive analytics to accelerate hypothesis testing, KOL validation, and medical affairs strategy."
              wide
              photo="/images/Service-KOLs-Profiling.png"
            />
            <ServiceCard
              titleBlue="Publications & Clinical Trials"
              titleDark="– Strategic Insights for Healthcare Research"
              description="Accelerating Market Access with Data-Driven Insights"
            />
          </div>
        </div>

        {/* Кнопка See all services */}
        <div className="flex justify-center mt-[64px]">
          <button className="w-[294px] py-[18px] bg-navy-base text-light-base font-denim font-medium text-[16px] leading-[1.25] text-center rounded-[16px] hover:bg-[#1a2440] transition-colors">
            See all services
          </button>
        </div>

      </div>
    </section>
  )
}
