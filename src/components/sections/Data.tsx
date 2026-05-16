function Label({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center px-[6px] py-[4px] bg-primary-base text-light-base font-denim font-medium text-[11px] uppercase tracking-[0.55px] leading-[1.4] rounded-[3px]">
      {text}
    </span>
  )
}

const dataCards = [
  {
    title: 'Custom Sourced\nData Intelligence',
    description: 'Our data and medical experts work together to identify and provide the precise dataset you need.',
  },
  {
    title: 'Optimized Data Modeling',
    description: 'Advanced data handling capabilities and expertise in data modeling enable the efficient management of vast datasets from multiple sources.',
  },
  {
    title: 'Scalable Health Data Expansion',
    description: 'Scalable Infrastructure enables the rapid expansion of data through integration of new sources.',
  },
]

export default function Data() {
  return (
    <section
      id="data"
      className="mx-[16px] rounded-[16px] overflow-hidden"
      style={{
        minHeight: '949px',
        background: `
          radial-gradient(
            ellipse 60% 40% at 50% 0%,
            rgba(94, 176, 255, 0.5) 0%,
            rgba(9, 24, 47, 0.5) 100%
          ),
          #0E1322
        `,
      }}
    >
      <div className="max-w-[1408px] mx-auto px-[64px] pt-[140px] pb-[80px]">

        {/* Заголовок */}
        <div className="flex flex-col items-center gap-[24px] mb-[80px]">
          <Label text="L37 data" />
          <h2 className="font-denim font-normal text-[48px] leading-[1.15] text-light-base text-center max-w-[697px]">
            Expertise in Healthcare Data Integrity and Management
          </h2>
          <p className="font-denim font-normal text-[20px] leading-[1.4] text-light-strong text-center max-w-[760px]">
            L37 brings extensive expertise in managing confidential datasets, collecting, cleaning, curation, and harmonization, ensuring integration to create reliable evidence.
          </p>
        </div>

        {/* 3 картки */}
        <div className="flex gap-[24px] justify-center">
          {dataCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[16px] overflow-hidden flex flex-col justify-between p-[48px]"
              style={{
                width: '411px',
                height: '346px',
                backgroundColor: '#2473F2',
              }}
            >
              <h3 className="font-denim font-normal text-[36px] leading-[1.15] tracking-[-0.36px] text-light-base whitespace-pre-line">
                {card.title}
              </h3>
              <p className="font-denim font-normal text-[18px] leading-[1.4] text-light-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
