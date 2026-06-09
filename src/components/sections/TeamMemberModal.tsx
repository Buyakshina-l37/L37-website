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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(10, 15, 26, 0.2)' }}
      onClick={onClose}
    >
      {/* Modal card — 1000px wide, responsive height, bg #f0f0f5, rounded-16 */}
      <div
        className="relative bg-[#f0f0f5] rounded-[16px]"
        style={{ width: 1000, padding: 48 }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Close button ── top 32, right 32, 32×32 circle, border-2 border-navy */}
        <button
          onClick={onClose}
          className="absolute group size-[32px] rounded-full border-2 border-navy-base
                     flex items-center justify-center hover:bg-navy-base transition-colors"
          style={{ top: 32, right: 32 }}
          aria-label="Close"
        >
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            className="text-navy-base group-hover:text-white transition-colors"
          >
            <path d="M1 1L9 9M1 9L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* ── Content row: photo + right column ── */}
        <div className="flex gap-[48px]">

          {/* ── Photo ── 230×250, rounded-16 */}
          <div
            className="relative rounded-[16px] overflow-hidden shrink-0"
            style={{ width: 230, height: 250 }}
          >
            {photo ? (
              <Image
                src={photo}
                alt={name}
                fill
                className="object-cover object-top pointer-events-none"
                sizes="230px"
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

            {/* Name + role — flex-col gap-12 */}
            <div className="flex flex-col gap-[12px]">
              <h2
                className="font-denim font-normal text-[32px] leading-[1.2]"
                style={{ color: '#01012f' }}
              >
                {name}
              </h2>
              <p
                className="font-denim font-normal text-[16px] leading-[1.4] text-navy-70"
                style={{ letterSpacing: '0.16px' }}
              >
                {role}
              </p>
            </div>

            {/* Bio — 18px, mt-32 */}
            {bio && (
              <p
                className="font-denim font-normal text-[18px] leading-[1.4] text-navy-80"
                style={{ marginTop: 32 }}
              >
                {bio}
              </p>
            )}

            {/* Contact buttons — mt-32, gap-24 */}
            {(email || linkedin) && (
              <div
                className="flex gap-[24px] items-center"
                style={{ marginTop: 32 }}
              >
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
