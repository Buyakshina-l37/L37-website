import Image from 'next/image'

export default function Pediatric() {
  return (
    <div className="flex flex-col md:flex-row md:gap-[130px] md:items-center w-full gap-[48px]">
      {/* Left: image */}
      <Image
        src="/images/sar-robot.png"
        alt="SAR robot in pediatric care"
        width={610}
        height={453}
        sizes="(max-width: 768px) 100vw, 610px"
        className="w-full h-auto md:w-[610px] md:h-[453px] md:flex-shrink-0 rounded-[16px] object-cover"
      />

      {/* Right: text column */}
      <div className="flex flex-col gap-[48px] w-full md:w-[610px]">
        {/* Heading */}
        <h2
          className="flex flex-col"
          style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.48px' }}
        >
          <span className="text-gradient-highlight">L37 Integrates and Orchestrates</span>
          <span className="text-[rgba(10,15,26,0.9)]">
            a Range of Clinical Robots
          </span>
        </h2>

        {/* Body */}
        <div style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.4, color: 'rgba(10,15,26,0.8)' }}>
          <p style={{ marginBottom: 20 }}>
            L37 integrates and orchestrates a range of healthcare robots, both physical and digital,
            starting in pediatric units and divisions.
          </p>
          <p>
            Physical robots cover social, nursing, rehabilitation and logistics. Digital robots are
            agentic AI agents that reason and act alongside them.
          </p>
        </div>
      </div>
    </div>
  )
}
