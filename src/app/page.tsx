import Navbar from '@/components/layout/Navbar'
import SecondaryNav from '@/components/layout/SecondaryNav'
import Hero from '@/components/sections/Hero'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import Data from '@/components/sections/Data'
import Stats from '@/components/sections/Stats'
import Partners from '@/components/sections/Partners'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <SecondaryNav />
      <main className="bg-light-strong">
        <section id="vision">
          <Hero />
        </section>
        <section id="solution" className="px-[16px] py-[24px]">
          <Solution />
        </section>
        <section id="services" className="px-[16px] py-[24px]">
          <Services />
        </section>
        <section id="data" className="py-[24px]">
          <Data />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
