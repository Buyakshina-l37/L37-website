'use client'
// ── TeamMemberModal ──────────────────────────────────────────────
// Design tokens from Figma node 12545:7815 (teamcard-popup)
// Modal: 1000px wide, height responsive to content, bg-[#f0f0f5], rounded-[16px]
// Padding: 48px all sides
// Photo: 230×250, rounded-[16px] — left column, flex-shrink-0
// Right column gap from photo: 48px
// Name block: flex-col gap-12
//   Name: Denim TRIAL Regular 32px, #01012f, leading-1.2
//   Role: 16px, rgba(10,15,26,0.7), tracking 0.16px, leading-1.4
// Gap between name block and bio: 32px
// Bio: Denim TRIAL Regular 18px, #0C1629, leading-1.4
// Buttons: gap-24, 40×40 from Button-personal-*.svg assets, mt-32
// Close: top-32 right-32, 32×32 circle, border-2 border-navy-base

import { useEffect } from 'react'
import Image from 'next/image'

export interface TeamMemberModalProps {
  name: string
  role: string
  photo: string | null
  bio?: string | null
  email?: string | null
  linkedin?: string | null
  onClose: () => void
}

export default function TeamMemberModal({
  name, role, photo, bio, email, linkedin, onClose,
}: TeamMemberModalProps) {

  // ESC key closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Scroll lock while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    // Backdrop — fixed inset-0, dark overlay, click-outside closes
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      {/* Modal card
          Mobile: centered popup, calc(100% - 40px) wide, max-w 390px, auto height, max-h 90vh, scrollable
          Desktop: 1000px wide, fixed padding */}
      <div
        className="
          relative bg-[#f0f0f5] overflow-y-auto
          rounded-[16px]
          p-[24px] md:p-[48px]
          w-[calc(100%-40px)] max-w-[390px] max-h-[90vh]
          md:w-[1000px] md:max-w-none md:max-h-none
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Close button ── top-16 right-16 on mobile, top-32 right-32 on desktop */}
        <button
          onClick={onClose}
          className="absolute group size-[32px] rounded-full border-2 border-navy-base
                     flex items-center justify-center hover:bg-navy-base transition-colors
                     top-[16px] right-[16px] md:top-[32px] md:right-[32px]"
          aria-label="Close"
        >
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            className="text-navy-base group-hover:text-white transition-colors"
          >
            <path d="M1 1L9 9M1 9L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* ── Content: stacked + centered on mobile, row on desktop ── */}
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[48px] mt-[16px] md:mt-0">

          {/* ── Photo ──
              Mobile: centered, ~60% modal width, height auto, rounded-[12px]
              Desktop: 230×250, flex-shrink-0 */}
          <div className="flex justify-center md:block md:shrink-0">
            <div
              className="relative rounded-[12px] md:rounded-[16px] overflow-hidden
                         w-[60%] md:w-[230px] md:h-[250px]"
            >
              {photo ? (
                <Image
                  src={photo}
                  alt={name}
                  width={230}
                  height={250}
                  className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full object-cover object-top pointer-events-none"
                  sizes="(max-width: 768px) 60vw, 230px"
                />
              ) : (
                <div
                  className="w-full aspect-[230/250]"
                  style={{
                    backgroundImage: [
                      'linear-gradient(180deg, rgb(180,190,210) 0%, rgba(180,190,210,0.1) 100%)',
                      'linear-gradient(90deg, rgb(240,240,245) 0%, rgb(240,240,245) 100%)',
                    ].join(', '),
                  }}
                />
              )}
            </div>
          </div>

          {/* ── Right column (desktop) / full-width column (mobile) ── */}
          <div className="flex flex-col flex-1 min-w-0">

            {/* Name + role — centered on mobile, left on desktop */}
            <div className="flex flex-col gap-[6px] md:gap-[12px] text-center md:text-left">
              <h2
                className="font-denim font-normal text-[22px] md:text-[32px] leading-[1.2]"
                style={{ color: '#01012f' }}
              >
                {name}
              </h2>
              <p
                className="font-denim font-normal text-[13px] md:text-[16px] leading-[1.4] text-navy-70"
                style={{ letterSpacing: '0.16px' }}
              >
                {role}
              </p>
            </div>

            {/* Bio — 14px at all breakpoints */}
            {bio && (
              <p
                className="font-denim font-normal text-[14px] leading-[1.5] text-navy-80 mt-[16px] md:mt-[32px]"
              >
                {bio}
              </p>
            )}

            {/* Contact buttons — centered on mobile, left on desktop */}
            {(email || linkedin) && (
              <div className="flex gap-[16px] md:gap-[24px] items-center justify-center md:justify-start mt-[16px] md:mt-[32px]">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="shrink-0 opacity-90 hover:opacity-100 transition-opacity"
                    aria-label={`Email ${name}`}
                  >
                    <Image
                      src="/images/Button-personal-email.svg"
                      alt="Email"
                      width={40}
                      height={40}
                    />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 opacity-90 hover:opacity-100 transition-opacity"
                    aria-label={`${name} on LinkedIn`}
                  >
                    <Image
                      src="/images/Button-personal-linkedin.svg"
                      alt="LinkedIn"
                      width={40}
                      height={40}
                    />
                  </a>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}
