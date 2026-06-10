import Navbar from '@/components/layout/Navbar'
import NavMobile from '@/components/layout/NavMobile'
import SecondaryNav from '@/components/layout/SecondaryNav'
import Hero from '@/components/sections/Hero'
import HeroMobile from '@/components/sections/HeroMobile'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import TechStack from '@/components/sections/TechStack'
import TechStackMobile from '@/components/sections/TechStackMobile'
import Stats from '@/components/sections/Stats'
import Partners from '@/components/sections/Partners'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
        <SecondaryNav />
      </div>
      <div className="md:hidden">
        <NavMobile />
      </div>
      <main>
        {/* Hero wrapper: accounts for fixed 90px navbar + horizontal page margins */}
        <div style={{ paddingTop: '90px', paddingLeft: '16px', paddingRight: '16px' }}>
          <section id="vision">
            <div className="hidden md:block">
              <Hero />
            </div>
            <div className="md:hidden">
              <HeroMobile />
            </div>
          </section>
        </div>
        <section id="solution" className="px-[16px] py-[24px]">
          <Solution />
        </section>
        <section id="services" className="px-[16px] py-[24px]">
          <Services />
        </section>
        <section id="tech-stack" className="py-[24px]">
          <div className="hidden md:block">
            <TechStack />
          </div>
          <div className="md:hidden">
            <TechStackMobile />
          </div>
        </section>
        <section id="stats">
          <Stats />
        </section>
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
