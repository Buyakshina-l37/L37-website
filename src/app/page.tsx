import SecondaryNav from '@/components/layout/SecondaryNav'
import Hero from '@/components/sections/Hero'
import HeroMobile from '@/components/sections/HeroMobile'
import SolutionSection from '@/components/sections/SolutionSection'
import PhysicalAIDigitalTwins from '@/components/sections/PhysicalAIDigitalTwins'
import OemProgram from '@/components/sections/OemProgram'
import TechStack from '@/components/sections/TechStack'
import TechStackMobile from '@/components/sections/TechStackMobile'
import Pediatric from '@/components/sections/Pediatric'
import Ontology from '@/components/sections/Ontology'
import Workflow from '@/components/sections/Workflow'
import Strength from '@/components/sections/Strength'
import GetInTouch from '@/components/sections/GetInTouch'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <SecondaryNav />
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

        {/* Solution — 160px top gap from Hero, 160px bottom margin to next section */}
        <section
          id="solution"
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 160, paddingBottom: 0, marginBottom: 160 }}
        >
          <SolutionSection />
        </section>

        {/* Physical AI & Digital Twins — Fix 5: centred at max-width 1350px */}
        {/* id="digital-twins" — Workflow secondary nav now points to the new Workflow section */}
        <section
          id="digital-twins"
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
        >
          <div style={{ maxWidth: 1350, margin: '0 auto' }}>
            <PhysicalAIDigitalTwins />
          </div>
        </section>

        {/* OEM Program — flushes with TechStack below (pb-0) */}
        <section
          id="oem-program"
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 24, paddingBottom: 0, marginBottom: 0 }}
        >
          <OemProgram />
        </section>

        {/* TechStack — flushes with OemProgram above (pt-0); 160px gap after the dark cluster */}
        <section
          id="technology"
          style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
        >
          <div className="hidden md:block">
            <TechStack />
          </div>
          <div className="md:hidden">
            <TechStackMobile />
          </div>
        </section>

        {/* Pediatric */}
        <section
          id="pediatric"
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
        >
          <div style={{ maxWidth: 1350, margin: '0 auto' }}>
            <Pediatric />
          </div>
        </section>

        {/* Ontology */}
        <section
          id="ontology"
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 160 }}
        >
          <div style={{ maxWidth: 1350, margin: '0 auto' }}>
            <Ontology />
          </div>
        </section>

        {/* Workflow (What is the Process?) — Fix 2: id="workflow" for SecondaryNav anchor */}
        {/* Flushes with Strength below */}
        <section
          id="workflow"
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 24, paddingBottom: 0, marginBottom: 0 }}
        >
          <Workflow />
        </section>

        {/* Strength — flushes with Workflow above */}
        <section
          className="px-[16px] hidden md:block"
          style={{ paddingTop: 0, paddingBottom: 24, marginBottom: 0 }}
        >
          <Strength />
        </section>

        {/* Get in touch — Fix 4: 160px above and below */}
        <section
          className="px-[16px] hidden md:block"
          style={{ marginTop: 160, marginBottom: 160 }}
        >
          <div style={{ maxWidth: 1281, margin: '0 auto' }}>
            <GetInTouch />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
