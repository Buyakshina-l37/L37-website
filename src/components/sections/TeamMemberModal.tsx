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
    // Backdrop — fixed inset-0, z-100, navy 20% opacity, click-outside closes
    // Mobile: items-end so modal slides up from bottom; desktop: items-center
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center md:justify-center md:px-4 overflow-y-auto"
      style={{ backgroundColor: 'rgba(10, 15, 26, 0.5)' }}
      onClick={onClose}
    >
      {/* Modal card
          Mobile: full-width, max-height 92dvh, rounded top corners only, scrollable
          Desktop: 1000px wide, fully rounded, fixed padding */}
      <div
        className="
          relative bg-[#f0f0f5] w-full overflow-y-auto
          rounded-t-[24px] md:rounded-[16px]
          p-[24px] pb-[40px] md:p-[48px]
          max-h-[92dvh] md:max-h-none md:w-[1000px]
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Close button ── top 20 right 20 on mobile, top 32 right 32 on desktop */}
        <button
          onClick={onClose}
          className="absolute group size-[32px] rounded-full border-2 border-navy-base
                     flex items-center justify-center hover:bg-navy-base transition-colors
                     top-[20px] right-[20px] md:top-[32px] md:right-[32px]"
          aria-label="Close"
        >
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            className="text-navy-base group-hover:text-white transition-colors"
          >
            <path d="M1 1L9 9M1 9L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* ── Content: stacked on mobile, row on desktop ── */}
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[48px] mt-[8px] md:mt-0">

          {/* ── Photo ── full-width 200px tall on mobile, 230×250 on desktop */}
          <div
            className="relative rounded-[16px] overflow-hidden shrink-0 w-full h-[200px] md:w-[230px] md:h-[250px]"
          >
            {photo ? (
              <Image
                src={photo}
                alt={name}
                fill
                className="object-cover object-top pointer-events-none"
                sizes="(max-width: 768px) 100vw, 230px"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: [
                    'linear-gradient(180deg, rgb(180,190,210) 0%, rgba(180,190,210,0.1) 100%)',
                    'linear-gradient(90deg, rgb(240,240,245) 0%, rgb(240,240,245) 100%)',
                  ].join(', '),
                }}
              />
            )}
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col flex-1 min-w-0">

            {/* Name + role */}
            <div className="flex flex-col gap-[8px] md:gap-[12px]">
              <h2
                className="font-denim font-normal text-[24px] md:text-[32px] leading-[1.2]"
                style={{ color: '#01012f' }}
              >
                {name}
              </h2>
              <p
                className="font-denim font-normal text-[14px] md:text-[16px] leading-[1.4] text-navy-70"
                style={{ letterSpacing: '0.16px' }}
              >
                {role}
              </p>
            </div>

            {/* Bio */}
            {bio && (
              <p
                className="font-denim font-normal text-[15px] md:text-[18px] leading-[1.5] md:leading-[1.4] text-navy-80 mt-[20px] md:mt-[32px]"
              >
                {bio}
              </p>
            )}

            {/* Contact buttons */}
            {(email || linkedin) && (
              <div className="flex gap-[16px] md:gap-[24px] items-center mt-[20px] md:mt-[32px]">
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
