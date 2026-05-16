export default function Hero() {
  return (
    <section
      id="vision"
      className="relative w-full bg-light-strong"
      style={{ minHeight: '100vh' }}
    >
      {/* Головний контент — flex по центру */}
      <div className="flex flex-col items-center justify-center text-center pt-[190px] pb-[310px] px-8">

        {/* Заголовок */}
        <h1 className="font-denim-wd font-normal text-[64px] leading-[1.05] tracking-[-0.64px] text-center max-w-[741px] mb-[32px]">
          <span className="text-navy-base">
            L37 Transforms Expert-Verified Data into{' '}
          </span>
          <span className="text-primary-base">
            Ironclad AI for Healthcare
          </span>
        </h1>

        {/* Підзаголовок */}
        <p className="font-denim font-normal text-[20px] leading-[1.4] text-[rgba(12,22,41,0.8)] text-center max-w-[741px] mb-[64px]">
          There is no margin for error in healthcare data. Whether you have raw data to curate or need an instant answer, L37 has risen to the challenge by transforming expert-vetted data into actionable intelligence for the healthcare sector.
        </p>

        {/* CTA кнопка */}
        <button className="w-[294px] py-[18px] bg-navy-base text-light-base font-denim font-medium text-[16px] leading-[1.25] text-center rounded-[16px] shadow-button hover:bg-[#1a2440] transition-colors whitespace-nowrap">
          Contact our experts
        </button>
      </div>

      {/* Vision блок */}
      <div className="flex justify-center px-8 pb-[140px]">
        <div className="flex items-start gap-[24px] max-w-[942px] w-full">
          <span className="mt-[10px] shrink-0 bg-primary-base text-light-base font-denim font-medium text-[11px] uppercase tracking-[0.55px] leading-[1.4] px-[6px] py-[4px] rounded-[3px]">
            VISION
          </span>
          <p className="font-denim font-normal text-[48px] leading-[1.15] text-navy-base">
            L37 enriches business decisions in the healthcare industry through trustworthy healthcare intelligence, expert verification, and LLM augmentation.
          </p>
        </div>
      </div>

    </section>
  )
}
