import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactPage() {
  return (
    <>
      <main className="pt-[90px]" style={{ backgroundColor: '#F2F5FA', minHeight: '100vh' }}>
        <div className="max-w-[1408px] mx-auto px-[80px] py-[140px]">
          <div className="grid grid-cols-2 gap-[80px] items-start">

            {/* Ліва колонка */}
            <div className="flex flex-col gap-[80px]">

              {/* Заголовок */}
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-denim font-normal text-[64px] leading-[1.05] text-navy-base">
                  Contact <span className="text-primary-base">us</span>
                </h1>
                <p className="font-denim font-normal text-[18px] leading-[1.4] text-[rgba(10,15,26,0.8)]">
                  Whether you have a question about our services or need support, our team is ready to assist you.
                </p>
              </div>

              {/* Contact information */}
              <div className="flex flex-col gap-[32px]">
                <h3 className="font-denim font-normal text-[20px] leading-[1.4] text-navy-base">
                  Contact information
                </h3>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex gap-[16px] items-center">
                    <Image src="/icons/Phone.svg" alt="Phone" width={24} height={24} />
                    <span className="font-denim font-normal text-[18px] leading-[1.4] text-navy-base">
                      +1 (740) 272-5256
                    </span>
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <Image src="/icons/Email.svg" alt="Email" width={24} height={24} />
                    <a href="mailto:info@l37.co" className="font-denim font-normal text-[18px] leading-[1.4] text-primary-base hover:underline">
                      info@l37.co
                    </a>
                  </div>
                  <div className="flex gap-[16px] items-start">
                    <Image src="/icons/map-pin.svg" alt="Address" width={24} height={24} className="shrink-0 mt-[2px]" />
                    <span className="font-denim font-normal text-[18px] leading-[1.4] text-navy-base">
                      200 Continental Drive, Suite 401,<br/>
                      Newark, DE 19713, USA
                    </span>
                  </div>
                </div>

                {/* Соцмережі */}
                <div className="flex gap-[24px]">
                  {[
                    { href: 'https://linkedin.com/company/l37-co/', src: '/images/Button-social-media-in.svg', label: 'LinkedIn' },
                    { href: 'https://www.facebook.com/L37.co', src: '/images/Button-social-media-fb.svg', label: 'Facebook' },
                    { href: 'https://www.instagram.com/l37.co', src: '/images/Button-social-media-insta.svg', label: 'Instagram' },
                    { href: 'https://x.com/L37Healthcare', src: '/images/Button-social-media-x.svg', label: 'X' },
                  ].map(({ href, src, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] rounded-[8px] bg-navy-base flex items-center justify-center hover:bg-primary-base transition-colors"
                    >
                      <Image src={src} alt={label} width={40} height={40} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Права колонка — форма */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
