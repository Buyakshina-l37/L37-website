import Image from 'next/image'

function Label({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center px-[6px] py-[4px] bg-primary-base text-light-base font-denim font-medium text-[11px] uppercase tracking-[0.55px] leading-[1.4] rounded-[3px]">
      {text}
    </span>
  )
}

const cards = [
  {
    title: 'Advanced Data Analytics',
    description: 'We connect organizations to the intelligence they can trust to transform their perspective, their work and our world.',
    icon: '/images/Advanced-Data -Analytics.svg',
  },
  {
    title: 'Extensive Ryte Data Collection',
    description: 'We leverage Real-World Data interoperability, transforming fragmented information into actionable insights tailored to customer needs.',
    icon: '/images/Extensive-Data-Collection.svg',
  },
  {
    title: 'Ensure Regulatory Compliance',
    description: 'Our data is sourced, processed, and maintained in accordance with industry-leading standards and regulatory frameworks, including HIPAA, GDPR',
    icon: '/images/Regulatory-Compliance.svg',
  },
  {
    title: 'Expert-led Insights',
    description: 'Our data and medical experts collaborate to deliver actionable, easy-to-integrate analytics for healthcare providers.',
    icon: '/images/Expert-led-Insights.svg',
  },
]

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative mx-auto bg-[#F5F7FC] rounded-[13px] overflow-hidden"
      style={{ maxWidth: '1408px', minHeight: '1237px' }}
    >
      {/* Заголовок — лівий стовпець */}
      <div className="absolute left-[209px] top-[140px] flex flex-col gap-[24px] items-start">
        <Label text="Our Solution" />
        <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-navy-base w-[495px]">
          Make Data-driven Decisions with Confidence
        </h2>
      </div>

      {/* Підзаголовок — правий стовпець */}
      <p className="absolute left-[757px] top-[229px] font-denim font-normal text-[20px] leading-[1.4] text-navy-base w-[378px]">
        L37 offers a comprehensive data analysis services transforming complex medical data into actionable insights you can trust.
      </p>

      {/* Grid карток 2x2 */}
      <div
        className="absolute grid grid-cols-2 gap-[24px]"
        style={{ left: '64px', top: '417px', width: '1280px' }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-[16px] shadow-card-light p-[48px] flex flex-col justify-between"
            style={{
              height: '328px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, #FFFFFF 100%)',
            }}
          >
            {/* Іконка — правий верхній кут */}
            <div className="absolute top-[32px] right-[32px]">
              <Image
                src={card.icon}
                alt={card.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Текст */}
            <h3 className="font-denim font-normal text-[36px] leading-[1.15] tracking-[-0.36px] text-navy-base w-[324px]">
              {card.title}
            </h3>
            <p className="font-denim font-normal text-[18px] leading-[1.4] text-navy-base w-[324px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
