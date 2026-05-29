import Image from 'next/image'

// ── Design tokens from Figma node 9735:12022 ─────────────────────
// Card: w-340 h-429, rounded-16, bg gradient rgba(255,255,255,0.7)→#fff
// Shadow: 0px 40px 48px -8px rgba(0,11,223,0.06)
// Photo area: height 300 (aspect 340:300), gradient placeholder when empty
// Content: pb-32 px-32, flex-col gap-24, justify-center
// Name: Denim TRIAL Medium 24px #0C1629 tracking -0.24px leading 1.25
// Role: Denim TRIAL Regular 16px rgba(12,22,41,0.7) tracking 0.16px leading 1.05
// Arrow: 15×12, color #0C1629 → #2473F2 on hover
// Hover: scale-[1.02] + arrow color → blue

interface TeamCardProps {
  name: string
  role: string
  photo?: string | null
}

export default function TeamCard({ name, role, photo }: TeamCardProps) {
  return (
    // Shadow wrapper — separate from overflow-hidden so shadow isn't clipped on scale
    <div className="rounded-[16px] shadow-[0px_40px_48px_-8px_rgba(0,11,223,0.06)]">

      {/* Card — scale on hover, clips photo corners */}
      <div
        className="
          group relative flex flex-col h-[429px] w-full rounded-[16px] overflow-hidden
          bg-gradient-to-b from-[rgba(255,255,255,0.7)] to-white
          transition-transform duration-300 ease-out cursor-pointer
          hover:scale-[1.02]
        "
      >

        {/* ── Photo area (height 300px = aspect 340:300) ────── */}
        <div className="relative w-full shrink-0" style={{ height: '300px' }}>
          {photo ? (
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover object-top pointer-events-none"
              sizes="340px"
            />
          ) : (
            // Empty state: Figma gradient placeholder
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: [
                  'linear-gradient(180deg, rgb(180, 190, 210) 0%, rgba(180, 190, 210, 0.1) 100%)',
                  'linear-gradient(90deg, rgb(240, 240, 245) 0%, rgb(240, 240, 245) 100%)',
                ].join(', '),
              }}
            />
          )}
        </div>

        {/* ── Content: name + role/arrow ─────────────────────── */}
        {/* flex-1 + justify-center + pb-32 matches Figma "justify-center pb-[32px]" */}
        <div className="flex flex-1 flex-col gap-[24px] items-start justify-center pb-[32px] px-[32px] w-full">

          {/* Name — Denim TRIAL Medium 24px */}
          <h3
            className="font-denim font-medium text-[24px] leading-[1.25] text-navy-base w-full"
            style={{ letterSpacing: '-0.24px', wordBreak: 'break-word' }}
          >
            {name}
          </h3>

          {/* Role + Arrow row */}
          <div className="flex items-center justify-between w-full">
            <span
              className="font-denim font-normal text-[16px] text-navy-70 overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ letterSpacing: '0.16px', lineHeight: '1.05' }}
            >
              {role}
            </span>

            {/* Right-pointing arrow — color transitions navy → blue on card hover */}
            <svg
              width="15" height="12" viewBox="0 0 15 12" fill="none"
              className="shrink-0 ml-2 text-navy-base group-hover:text-primary-base transition-colors duration-300"
              aria-hidden="true"
            >
              <path
                d="M1 6H13.5M9.5 1.5L13.5 6L9.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}
